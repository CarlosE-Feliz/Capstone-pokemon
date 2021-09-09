function counter(data) {
  data = [
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
  const itemNumb = document.getElementById('mock-li');
  itemNumb.innerHTML = data.length;
}
module.exports = counter;