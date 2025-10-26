/** All blog posts as a collection. */
export const getAllPosts = collection => {
  // lets exclude drafts from the allPosts collection
  // unless ELEVENTY_ENV is set to 'development'
  //if (process.env.ELEVENTY_ENV === 'development') {
  //  return collection.getFilteredByGlob('./src/posts/**/*.md').reverse();
  //}
  //// in production build, exclude drafts
  //return collection.getFilteredByGlob(['./src/posts/**/*.md', '!./src/posts/drafts/**/*.md']).reverse();
  // lets get all posts from 2016 only
  //return collection.getFilteredByGlob('./src/posts/2025/**/*.md').reverse();
  
  let post2016 = collection.getFilteredByGlob('./src/posts/2016/**/*.md');
  let post2017 = collection.getFilteredByGlob('./src/posts/2017/**/*.md');
  let post2018 = collection.getFilteredByGlob('./src/posts/2018/**/*.md');
  let post2019 = collection.getFilteredByGlob('./src/posts/2019/**/*.md');
  let post2020 = collection.getFilteredByGlob('./src/posts/2020/**/*.md');
  let post2021 = collection.getFilteredByGlob('./src/posts/2021/**/*.md');
  let post2022 = collection.getFilteredByGlob('./src/posts/2022/**/*.md');
  let post2023 = collection.getFilteredByGlob('./src/posts/2023/**/*.md');
  let post2024 = collection.getFilteredByGlob('./src/posts/2024/**/*.md');
  let post2025 = collection.getFilteredByGlob('./src/posts/2025/**/*.md');
  let draftPosts = collection.getFilteredByGlob('./src/posts/drafts/**/*.md');
  // combine all years
  let allPosts = [
    ...post2016,
    ...post2017,
    ...post2018,
    ...post2019,
    ...post2020,
    ...post2021,
    ...post2022,
    ...post2023,
    ...post2024,
    ...post2025,
  ];
  if (process.env.ELEVENTY_ENV === 'development') {
    allPosts = [...allPosts, ...draftPosts];
  }
  // reverse to have newest posts first
  return allPosts.reverse();
  
};

/** All relevant pages as a collection for sitemap.xml */
export const showInSitemap = collection => {
  return collection.getFilteredByGlob('./src/**/*.{md,njk}');
};

/** All tags from all posts as a collection - excluding custom collections */
export const tagList = collection => {
  const tagsSet = new Set();
  collection.getAll().forEach(item => {
    if (!item.data.tags) return;
    item.data.tags.filter(tag => !['posts', 'docs', 'all'].includes(tag)).forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
};
