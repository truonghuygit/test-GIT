let data = window.localStorage.getItem("test");
let btn = $(".button");
let currentIndex = 0;

//kiem tra co localStorage chua?
if (!data) {
  window.localStorage.setItem("test", "[]");
  data = [];
} else {
  data = JSON.parse(data);
}

//add
function add() {
  //lay ra value cua username va password
  const username = $("#username").val();
  const password = $("#password").val();

  let isExist = data.findIndex(function (value) {
    return value.username === username;
  });
  if (username && password) {
    //kiem tra xem co user nao trung khong
    //neu trung thi thong bao ton tai, neu chua thi dua data vao localStorage
    if (isExist >= 0) {
      alert("User da ton tai");
    } else {
      data.push({ username, password });
      window.localStorage.setItem("test", JSON.stringify(data));
      render();
    }
  } else {
    alert("can nhap du thong tin");
  }
}

//update
function update() {
  //lay ra value cua username va password
  const username = $("#username").val();
  const password = $("#password").val();

  let isExist = data.findIndex(function (value) {
    return value.username === username;
  });
  if (username && password) {
    //kiem tra xem co user nao trung khong
    //neu trung thi thong bao ton tai, neu chua thi dua data vao localStorage
    if (isExist >= 0) {
      alert("User da ton tai");
    } else {
      data[currentIndex] = { username, password };
      window.localStorage.setItem("test", JSON.stringify(data));
      render();
    }
  } else {
    alert("can nhap du thong tin");
  }
}

//delete
function deleteUser() {
  data.splice(currentIndex, 1);
  window.localStorage.setItem("test", JSON.stringify(data));
  render();
}

$(".open-modal").on("click", function () {
  $(".create").css({ display: "block" });
  $(".update").css({ display: "nones" });
  $(".delete").css({ display: "nones" });
});

//render ra html
function render() {
  $(".container").html("");
  for (let i = 0; i < data.length; i++) {
    $(".container").append(`
      <div data-bs-toggle="modal" data-bs-target="#exampleModal" class="user user${i}">
        <p>Username: ${data[i].username}</p>
        <p>Password: ${data[i].password}</p>
      </div>
    `);
    $(`.user${i}`).on("click", function () {
      currentIndex = i;
      $(".create").css({ display: "none" });
      $(".update").css({ display: "block" });
      $(".delete").css({ display: "block" });
    });
  }
}
render();
