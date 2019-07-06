(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.buildFormData = function(inData, inFormData) {
    var DataWrapper = inFormData || FormData;
    var formData = new DataWrapper();
    nx.forIn(inData, function(key, value) {
      formData.append(key, value);
    });
    return formData;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.buildFormData;
  }
})();
