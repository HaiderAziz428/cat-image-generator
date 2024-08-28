const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const image = document.querySelector(".cat-img");
const btn = document.querySelector("button");

const getFacts = async () => {
  let response = await fetch(url);

  console.log(response);
  let data = await response.json();
  console.log(data[0].url);
  image.src = `${data[0].url}`;
};
btn.addEventListener("click", () => {
  getFacts();
});
