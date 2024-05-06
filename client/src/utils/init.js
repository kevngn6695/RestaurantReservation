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

export const createListItem = (name, text, url, onChange) => ({
  name: `${name}`,
  id: `${name}`,
  className: `${name}`,
  text: `${text}`,
  href: `${url}`,
  onChange: onChange,
});

export const createItem = (name, text, url, onChange) => ({
  name: `${name}`,
  className: `${name}`,
  text: `${text}`,
  href: `${url}`,
  onChange: onChange,
});

export const createListRoute = () => ({});
