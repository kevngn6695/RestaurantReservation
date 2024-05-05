export const createListInput = (
  name,
  type,
  text,
  placeholder,
  requried,
  onChange,
) => ({
  name: `${name}`,
  type: `${type}`,
  text: `${text}`,
  placeholder: `${placeholder}`,
  onChange: onChange,
  required: requried,
});

export const createListMenuItem = (name, text, url, onChange) => ({
  name: `${name}`,
  className: `${name}`,
  text: `${text}`,
  href: `${url}`,
  onChange: onChange,
});

export const createListRoute = () => ({});
