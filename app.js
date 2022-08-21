function likePost() {
  alert("Liked");
}

let allPosts = [];

async function submitPost() {
  let val = document.getElementById("post-value");
  let main = document.getElementById("main");
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
    var user = await response.json();
    console.log(user);

  allPosts.unshift(val.value);

  main.innerHTML = "";

  for (var i = 0; i < allPosts.length; i++) {
    main.innerHTML += `
    <div class="post">
    <header>
        <div class="profile-img">
            <img src="./images/avatar.png" width='80px' alt=""/>
            </div>
            <div class="profile-name">
                <h1>${user[i].name}</h1>
            </div>
    </header>
    <hr/>
    <h1>${allPosts[i]}</h1>
    <hr/>
    <div>
      <button id="like-btn">LIKE</button>
    </div>
  </div>
    `;
  }
  val.value = "";
}
