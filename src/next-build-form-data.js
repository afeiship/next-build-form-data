(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.buildFormData = function(inData) {
    var formData = new FormData();
    nx.forIn(inData, function(key, value) {
      formData.append(key, value);
    });
    return formData;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.buildFormData;
  }
})();
