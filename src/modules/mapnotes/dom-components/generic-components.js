export const buildInput = ({ id, inputType, labelText }) => {
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

export const buildHeader = ({ id, headerSize = 1, headerText }) => {
  // TODO: implemenet the header component builder
  // remember the tag <h1> and <h5> are generalized as <h{headerSize}>...
};

export const buildParagraph = ({ id, paragraphText }) => {};
