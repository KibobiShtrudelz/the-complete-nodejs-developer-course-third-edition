const geocode = (address, cb) => {
  console.log("address", address);
  setTimeout(() => {
    const data = { lat: 0, leng: 0 };
    cb(data);
  }, 2000);
};

geocode("Sofia", data => console.log(data));

const add = (a, b, cb) => {
  setTimeout(() => {
    cb(a + b);
  }, 2000);
};

add(1, 4, sum => {
  console.log(sum); // Should print: 5
});
