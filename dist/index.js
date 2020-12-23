/*!
 * name: @jswork/next-data2form
 * description: Build formData from object.
 * homepage: https://github.com/afeiship/next-data2form
 * version: 1.0.0
 * date: 2020-12-23 18:39:32
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
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
