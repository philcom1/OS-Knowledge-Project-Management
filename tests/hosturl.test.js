const createModule = require('../js/dependency');



// TEST HOST NAME
test('test hostname url', () => {
  document.getElementById("commentInput").value = "";
  expect(createModule.getHostUrl()).toBe('http://localhost');
});
