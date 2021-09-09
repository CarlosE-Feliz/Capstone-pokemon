const counter = require('./counter.js');
const mockhtml = require('./mockHTML.js');

test('plus new value', () => {
  document.body.innerHTML = mockhtml;
  const data = [];
  counter(data);
  data.push({
    likes: '3',
    item_id: '4',
  });
  const li = document.getElementById('mock-li');
  expect(li.textContent).toBe('4');
});