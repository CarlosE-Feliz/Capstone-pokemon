const API_LIKES = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/f7dXkqNplQRlTHeNNpht/likes';
const likes = async (id) => {
  await fetch(API_LIKES, {
    method: 'POST',
    body: JSON.stringify({ item_id: `${id}` }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};

const getLikes = async () => {
  await fetch(API_LIKES, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((json) => {
      const counter = document.querySelectorAll('.likes');
      counter.forEach((element, i) => {
        const id = element;
        id.id = i;
        let allLikes = 0;
        json.forEach((element) => {
          if (id.id === element.item_id) {
            id.innerHTML = element.likes;
          }
          const showLikes = document.getElementById('counter');
          const getLikes = [];
          if (element.item_id !== 'undefined') {
            // eslint-disable-next-line operator-assignment
            allLikes = allLikes + element.likes;
            getLikes.push(allLikes);
            showLikes.innerHTML = `All likes(${getLikes})`;
          }
        });
      });
    });
};

export { likes, getLikes };