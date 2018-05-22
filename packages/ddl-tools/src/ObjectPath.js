const stringToPath = require('./_stringToPath');
const isNil = require('lodash.isnil');

const normalize = (path) => {
  if (Array.isArray(path)) {
    return path;
  }
  if (typeof path === 'string') {
    return stringToPath(path);
  }
  return null;
};

module.exports = class ObjectPath {
  constructor(path) {
    if (path instanceof ObjectPath) {
      return path;
    }
    const normalizedPath = normalize(path);
    Object.freeze(normalizedPath);

    Object.defineProperty(this, 'raw', {
      get: function getRaw() {
        return normalizedPath;
      },
    });
  }

  isValid() {
    return !isNil(this.raw);
  }

  extend(extension) {
    const extensionPath = normalize(extension);
    return new ObjectPath(this.raw.concat(extensionPath));
  }
};
