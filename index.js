const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";

const dogContainer = document.querySelector(".doggos");

function onClick() {
  const dogPromise = fetch(RANDOM_DOG_URL);

  dogPromise.then(toJson).then(appendDogImageToDOM);
}

function toJson(response) {
  return response.json();
}

function appendDogImageToDOM(json) {
  const dogUrl = json.message;
  const img = createImage(dogUrl);
  dogContainer.appendChild(img);
}

function createImage(imageUrl) {
  const img = document.createElement("img");
  img.alt = "perrito bonito";
  img.src = imageUrl;
  return img;
}

document.querySelector(".add-doggo").addEventListener("click", onClick);
