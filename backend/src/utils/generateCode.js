import urlModel from "../models/url.model.js";

const generateCode = async () => {
  let code;

  do {
    code = "";

    const char =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 6; i++) {
      code += char[Math.floor(Math.random() * char.length)];
    }
  } while (await urlModel.findOne({ shortCode: code }));

  return code;
};

export default generateCode;