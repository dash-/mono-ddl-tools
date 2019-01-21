const Ajv = function Ajv() {
  const validate = () => true;
  const compiler = () => validate;
  const chain = () => this;

  this.addFormat = chain;
  this.addKeyword = chain;
  this.addSchema = chain;
  this.addMetaSchema = chain;
  this.compile = compiler;
  this.compileAsync = compiler;
  this.errorsText = () => '';
  this.getKeyword = validate;
  this.getSchema = compiler;
  this.removeKeyword = chain;
  this.removeSchema = chain;
  this.validate = validate;
  this.validateSchema = validate;
};

module.exports = Ajv;
