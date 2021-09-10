const postApiComent = async (id, user, userC) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/f7dXkqNplQRlTHeNNpht/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: user,
      comment: userC,
    }),
    headers: {
      'Content-type': 'application/json',

    },
  })
    .then((response) => response);
};

const getApiComent = (id) => {
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/f7dXkqNplQRlTHeNNpht/comments?item_id=${id}`, {
    headers: {
      'Content-type': 'application/json',

    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

// eslint-disable-next-line import/prefer-default-export
export { postApiComent, getApiComent };