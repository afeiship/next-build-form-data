(function () {
  require('../src');

  const FormData = require('form-data');

  describe('api.basic test', () => {
    test('nx.data2form should have _boundary string', function () {
      const data = { k1: 'value1', k2: 'value2' };
      const res = nx.data2form(data, { context: FormData });
      expect(typeof res._boundary).toBe('string');
    });
  });
})();
