start();

function start() {
  document.querySelector(".add-doggo").addEventListener("click", onClick);
  document
    .querySelector(".list-of-breeds")
    .addEventListener("click", onClickBreeds);
}

function onClick(x) {
  const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";

  fetch(RANDOM_DOG_URL)
    .then(toJSON)
    .then(appendImgToDOM);
}

function onClickBreeds() {
  const LIST_OF_BREEDS = "https://dog.ceo/api/breed/hound/images";
}

function toJSON(apiResponse) {
  return apiResponse.json();
}

function appendImgToDOM(jsonResponse) {
  const img = createImage(jsonResponse.message);
  document.querySelector(".doggos").appendChild(img);
}

function createImage(dogUrl) {
  const img = document.createElement("img");
  img.alt = "Perrito bonito";
  img.src = dogUrl;
  return img;
}
