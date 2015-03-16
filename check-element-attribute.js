(function initSetAttribute() {
  var setA = Element.prototype.setAttribute;

  function isInvalidValue(value) {
    // Check that value is not a data URI.
    return /^(?!data:).*NaN/.test(value);
  }

  Element.prototype.setAttribute = function checkSetAttribute(name, value) {
    if (isInvalidValue(value)) {
      throw new Error('invalid attribute value "' + value + '" for "' + name + '"');
    }
    return setA.apply(this, arguments);
  };
}());
