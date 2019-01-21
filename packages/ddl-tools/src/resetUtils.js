const conformStringArray = (stringArray) => {
  if (typeof stringArray === 'string') {
    return [stringArray];
  } else if (Array.isArray(stringArray)) {
    const conformed = stringArray.filter(value => (
      typeof value === 'string'
    ));
    return conformed.length > 0 ? conformed : null;
  }
  return null;
};

const conformResetOption = (resetOption) => {
  const conformed = {};
  if (resetOption.include) {
    const include = conformStringArray(resetOption.include);
    if (include) {
      conformed.include = include;
    }
  }
  if (resetOption.exclude) {
    const exclude = conformStringArray(resetOption.exclude);
    conformed.exclude = exclude;
  }
  return conformed;
};

const processConfig = function processConfig(options = {}) {
  if (typeof options.reset === 'object') {
    return Object.assign({}, options, {
      reset: conformResetOption(options.reset),
    });
  }
  return options;
};

const getResetKeys = (digitalData, resetOption) => {
  let keys = Object.keys(digitalData);

  if (resetOption) {
    if (resetOption.include) {
      keys = resetOption.include.filter(key => keys.includes(key));
    }
    if (resetOption.exclude) {
      keys = keys.filter(key => !resetOption.exclude.includes(key));
    }
  }

  return keys;
};

module.exports = {
  getResetKeys,
  processConfig,
};
