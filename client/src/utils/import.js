// utils/import.js
export function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("../", "")] = r(item).default;
  });
  return images;
}
