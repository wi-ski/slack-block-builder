const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.deleteOriginal,
    invalid: invalid.deleteOriginal,
    method: props.deleteOriginal,
    property: props.deleteOriginal,
    param: paramMap.deleteOriginal,
  };

  return [
    checks.boolTrueProperty(config),
    checks.literalBuild(config),
  ];
};