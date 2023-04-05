//your JS code here. If required.
const promises = [];

for (let i = 1; i <= 5; i++) {
  const promise = new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      reject(`Promise ${i} rejected with error`);
    } else {
      resolve(`Promise ${i} resolved with ${Math.floor(Math.random() * 10) + 1}`);
    }
  });
  promises.push(promise);
}

Promise.all(promises)
  .then((results) => {
    results.forEach((result) => {
      const p = document.createElement('p');
      p.innerText = result;
      document.getElementById('output').appendChild(p);
    });
  })
  .catch((error) => {
    const p = document.createElement('p');
    p.innerText = error;
    document.getElementById('output').appendChild(p);
  });
