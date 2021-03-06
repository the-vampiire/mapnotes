export const buildInputWithLabel = ({ id, inputType, labelText }) => {
  // textarea is its own tag but behaves as a long-form text input
  const isTextAreaInput = inputType.toLowerCase() === "textarea";

  // use textarea as tag name or use generic input with type attribute
  const tagName = isTextAreaInput ? "textarea" : "input";

  const label = document.createElement("label");
  const input = document.createElement(tagName);

  input.setAttribute("id", id);
  if (!isTextAreaInput) {
    // if it is a regular input provide the input type attribute
    input.setAttribute("type", inputType);
  }

  label.setAttribute("for", id);
  label.innerText = labelText; // text above input
  label.append(input); // appends after text

  return label;
};

export const buildButton = ({ id, buttonText }) => {
  const button = document.createElement("button");
  button.setAttribute("id", id);

  return button;
};

export const buildOption = ({ id, value, optionText }) => {
  const option = document.createElement("option");
  option.innerText = optionText;
  option.setAttribute("value", value);

  if (id) option.setAttribute("id", id);

  return option;
};

export const buildHeader = ({ id, headerSize = 1, headerText }) => {};

export const buildParagraph = ({ id, paragraphText }) => {};
