console.log("Client side Weather App loaded!");

const weatherForm = document.querySelector("form");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();

  const search = document.querySelector("input");
  const location = search.value;

  messageOne.textContent = "Location loading...";
  messageTwo.textContent = "Forecast loading...";

  fetch(`http://localhost:3000/weather?address=${location}`)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        messageOne.textContent = data.error;
        messageTwo.textContent = "";
        return;
      }

      messageOne.textContent = data.location;
      messageTwo.textContent = data.forecast;
    })
    .catch(err => console.log(err));
});
