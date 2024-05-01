export const capitalizeFirst = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const convertKtoF = (kelvin) => {
  return Math.round(((kelvin - 273.15) * 9) / 5 + 32);
};
