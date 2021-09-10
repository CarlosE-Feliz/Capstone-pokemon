const postApiComent = async (id, user, userC) => {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Jtewq4Jctkesw5RmCcn2/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: user,
      comment: userC,
    }),
    headers: {
      'Content-type': 'application/json',

    },
  });
  return res;
};

const getApiComent = (id) => {
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Jtewq4Jctkesw5RmCcn2/comments?item_id=${id}`, {
    headers: {
      'Content-type': 'application/json',

    },
  })
    .then((response) => response.json())
    .then((data) => {
      const ul = document.getElementById('ulComment');
      const title = document.getElementById('commentTitle');
      ul.innerHTML = '';
      if (data || ul) {
        data.forEach((element, i) => {
          title.innerHTML = `Comments(${i + 1})`;
          ul.innerHTML += `<li>${element.creation_date} ${element.username}  ${element.comment}</li>`;
        });
      }
    });
};

// eslint-disable-next-line import/prefer-default-export
export { postApiComent, getApiComent };