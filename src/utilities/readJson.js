import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

export const readJSON = (path) => {
  try {
    return require(path);
  } catch (error) {
    return null;
  }
};
