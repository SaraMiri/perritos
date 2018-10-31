start();

function start() {
  document
    .querySelector(".add-random-doggo")
    .addEventListener("click", onClickRandom);
  document
    .querySelector(".list-of-breeds")
    .addEventListener("click", onClickBreeds);
}

function onClickRandom(x) {
  const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";

  fetch(RANDOM_DOG_URL)
    .then(toJSON)
    .then(appendImgToDOM);
}

function onClickBreeds() {
  const LIST_OF_BREEDS = "https://dog.ceo/api/breeds/list/all";

  fetch(LIST_OF_BREEDS)
    .then(toJSON)
    .then(function(jsonResponse) {
      const breeds = jsonResponse.message;

      // TO DO: Funcion CreateLabel de las siguientes líneas
      const label = document.createElement("label");
      label.htmlFor = "breed-select";
      label.innerText = "Choose a breed";
      document.querySelector("#list-of-breeds").appendChild(label);

      const select = document.createElement("select");
      select.id = "breed-select";
      document.querySelector("#list-of-breeds").appendChild(select);
      console.log(select);
    });

  /*
  <section id="list-of-breeds"></section>
    <label for="breed-select">Choose a breed</label>
    <select id="breed-select">
      <option value="option">Choose an option</option>
      <option value="affenpinscher">Affenpinscher</option>
    </select>
    </div>
    */
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

function createList(dogList) {
  const select = document.createElement("select");
}
