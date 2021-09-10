const mockhtml = require('./mockHTML.js');

describe('Test counter', () => {
  test('plus new value', () => {
    document.body.innerHTML = mockhtml;
    const counter = () => {
      const data = [
        {
          likes: '1',
          item_id: '0',
        },
        {
          likes: '8',
          item_id: '1',
        },
        {
          likes: '2',
          item_id: '2',
        },
        {
          likes: '5',
          item_id: '3',
        },
      ];
      data.push({ likes: '3', item_id: '4' }, { likes: '3', item_id: '5' });
      const itemNumb = document.getElementById('mock-li');
      itemNumb.innerHTML = data.length;
      expect(itemNumb.textContent).toBe('6');
    };
    counter();
  });
});