import slugify from 'slugify';

/** Converts string to a slug form. */
export const slugifyString = str => {
  if (typeof str !== "string") return "";
  return slugify(str, {
    replacement: '-',
    remove: /[#,&,+()$~%.'":*¿?¡!<>{}]/g,
    lower: true
  });
};
