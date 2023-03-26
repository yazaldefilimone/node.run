import JSBeautify, { JSBeautifyOptions } from "js-beautify";

export const jsOptions: JSBeautifyOptions = {
  indent_size: 2,
  wrap_line_length:80,
};

export const codeFormatted = (code: string, options = jsOptions) => {
  return JSBeautify(code, options)
}