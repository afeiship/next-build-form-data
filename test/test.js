var nx = require('next-js-core2');
var FormData = require('form-data');
require('../src/next-build-form-data');

test('nx.buildFormData', function() {
  var data = {
    k1: 'value1',
    k2: 'value2'
  };
  var res = nx.buildFormData(data, FormData);
  expect(typeof res._boundary).toBe('string');
});
