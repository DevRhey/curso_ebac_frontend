document.addEventListener("DOMContentLoaded", function () {
  const profileAvatarEl = document.querySelector(".profile-avatar");
  const profileNameEl = document.querySelector(".profile-name");
  const profileUserNameEl = document.querySelector(".profile-username");
  const repositorysEl = document.querySelector("#repository");
  const followersEl = document.querySelector("#followers");
  const followingEl = document.querySelector("#following");
  const profileLinkEl = document.querySelector(".profile-link");
  const urlAPI = "https://api.github.com/users/DevRhey";

  fetch(urlAPI)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Erro na rede, tenta mais tarde...");
      }
      return response.json();
    })
    .then(function (json) {
      profileAvatarEl.src = json.avatar_url;
      profileNameEl.innerText = json.name;
      profileUserNameEl.innerText = json.login;
      repositorysEl.innerHTML = json.public_repos;
      followersEl.innerHTML = json.followers;
      followingEl.innerHTML = json.following;
      profileLinkEl.href = json.html_url;
    })
    .catch(function (error) {
      console.log("Error:", error);
    });
});
