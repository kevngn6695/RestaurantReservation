export const generateListInput = (
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

export const generateListItem = (name, text, onChange) => ({
  name: `${name}`,
  text: `${text}`,
  onChange: onChange,
});
