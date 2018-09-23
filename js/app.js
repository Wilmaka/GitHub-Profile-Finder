const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchBtn");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const cliend_id = "Iv1.20d2b9556d5fdf88";
const client_secret = "072f811850a749321a056d86735b2e98f98159d6";

const getUser = async (user) => {
  const api_call = await fetch(`https://api.github.com/users/${user}?cliend_id=${cliend_id}&client_secret=${client_secret}`);
  
  const data = await api_call.json();
  return { data };
};

const showData = () => {
  getUser(inputValue.value).then((results) => {

    nameContainer.innerHTML = `Name: <span class="main__profile-value">${results.data.name}</span>`;

    unContainer.innerHTML = `Username: <span class="main__profile-value">${results.data.login}</span>`;

    reposContainer.innerHTML = `Repos: <span class="main__profile-value">${results.data.public_repos}</span>`;

    urlContainer.innerHTML = `Account Link: <span><a class="main__profile-value" href="${results.data.html_url}">Click Here</a></span>`;
  })
};

searchButton.addEventListener("click", () => {
  showData();
})