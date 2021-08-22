async function mockApi() {
  const data = await fetch(
    "https://611f26289771bf001785c71b.mockapi.io/profiles"
  );
  const details = await data.json();
  console.log(details);
  details.forEach((element) => createProfile(element));
}

//   .catch((data) => console.log("user Not found"));

function createProfile({ name, avatar, createdAt }) {
  const info = document.createElement("div");
  info.className = "container";
  info.innerHTML = `
    <div class="profile-container">
    <img class="profile" src="${avatar} " width="200px" heigth="100px">

    </div>
    <div class="details">
    <h3>${name}</h3>
    <p>${new Date(createdAt).toDateString()}</p>
    
    </div>

    `;
  document.body.append(info);
}
mockApi();
