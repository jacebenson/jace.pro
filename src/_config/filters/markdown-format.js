// by Chris Burnell: https://chrisburnell.com/article/some-eleventy-filters/#markdown-format

import markdownParser from 'markdown-it';

const markdown = markdownParser();

export const markdownFormat = string => {
  if (typeof string !== 'string' || string === null || string === undefined) {
    return '';
  }
  return markdown.render(string);
};
