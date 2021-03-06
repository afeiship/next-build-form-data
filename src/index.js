(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = { context: global.FormData };

  nx.data2form = function (inData, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var formData = new options.context();
    nx.forIn(inData, function (key, value) {
      formData.append(key, value);
    });
    return formData;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.data2form;
  }
})();
