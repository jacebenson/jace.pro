const config = require('./resoc-open-graph-image.json');

const { builder } = require("@netlify/functions");
const path = require('path');
const chromium = require('chrome-aws-lambda');
const resocCore = require('@resoc/core');
const resocCreateImg = require('@resoc/create-img-core');
const resocImgData = require('@resoc/img-data');

const eventToSlugAndFormat = (event) => {
  const path = event.path;
  let slug = path.substr(path.lastIndexOf('/') + 1);

  let format = 'jpeg';
  const dotIdx = slug.lastIndexOf('.');
  if (dotIdx >= 0) {
    if (slug.substr(dotIdx + 1).toLowerCase() === 'png') {
      format = 'png';
    }
    // else: always default to jpeg

    // Remove format from slug
    slug = slug.substr(0, dotIdx);
  }

  return {
    format,
    slug
  }
}

const slugToImageDataViaFunction = async (slug) => {
  if (!config.slug_to_image_data_function) {
    return null;
  }

  const functionPath = path.join(__dirname, config.slug_to_image_data_function + '.js');

  const toImg = require(config.slug_to_image_data_function);
  return await toImg.slugToImageData(slug);
}

const slugToImageDataViaMappingFile = async (slug) => {
  if (!config.slug_to_image_data_mapping_file) {
    return null;
  }

  const mappingFilePath = path.join(__dirname, config.slug_to_image_data_mapping_file);

  return resocImgData.getImageData(mappingFilePath, slug);
}

const handler = async (event, context) => {
  try {
    console.log(`Processing image with config ${JSON.stringify(config)}`);

    const { slug, format } = eventToSlugAndFormat(event);
    console.log(`Slug ${slug}, format ${format}`);

    // First method: function
    let imgData = await slugToImageDataViaFunction(slug);

    // Second method: mapping file
    if (!imgData) {
      imgData = await slugToImageDataViaMappingFile(slug);
    }

    if (!imgData) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: `No image for ${slug}` })
      };
    }

    console.log("Render image with data", imgData);

    const browser = await chromium.puppeteer.launch({
      executablePath: await chromium.executablePath,
      args: chromium.args,
      headless: chromium.headless
    });

    const templateDir = `${config.templates_dir}/${imgData.template}`;
    const template = await resocCreateImg.loadLocalTemplate(`${templateDir}/resoc.manifest.json`);

    const htmlPath = await resocCreateImg.renderLocalTemplate(
      template, imgData.values,
      resocCore.FacebookOpenGraph,
      templateDir
    );

    const imageFormat = {
      type: format
    };
    if (format === 'jpeg') {
      imageFormat.quality = 80;
    }

    const image = await resocCreateImg.convertUrlToImage(
      `file:///${htmlPath}`, {
        ...imageFormat,
        encoding: "base64",
        fullPage: true
      },
      browser
    );

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/jpg'
      },
      body: image,
      isBase64Encoded: true
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An internal error occured' }),
    };
  }
};

exports.handler = builder(handler);
