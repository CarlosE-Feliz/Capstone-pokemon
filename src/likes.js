const API_LIKES = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/diOf0uYxVVF7DF0Ap9BI/likes';

const likes = async (id) => {
  await fetch(API_LIKES, {
    method: 'POST',
    body: JSON.stringify({ item_id: `${id}` }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json);
};

const getLikes = async (id, item) => {
  await fetch(API_LIKES, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((json) => json(id, item));
};

export { likes, getLikes };