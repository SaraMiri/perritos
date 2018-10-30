start();

function start() {
  document.querySelector(".add-doggo").addEventListener("click", onClick);
}

function onClick(x) {
  const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";
  fetch(RANDOM_DOG_URL)
    .then(function(apiResponse) {
      return apiResponse.json();
    })
    .then(function(jsonResponse) {
      const img = document.createElement("img");
      img.alt = "Perrito bonito";
      img.src = jsonResponse.message;

      document.querySelector(".doggos").appendChild(img);
    });
}
