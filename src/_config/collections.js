/** All blog posts as a collection. */
export const getAllPosts = collection => {
  // lets exclude drafts from the allPosts collection
  // unless ELEVENTY_ENV is set to 'development'
  if (process.env.ELEVENTY_ENV === 'development') {
    return collection.getFilteredByGlob('./src/posts/**/*.md').reverse();
  }
  // in production build, exclude drafts
  if (process.env.ELEVENTY_ENV !== 'development') {
    return collection.getFilteredByGlob(['./src/posts/**/*.md', '!./src/posts/drafts/**/*.md']).reverse();
  }
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
