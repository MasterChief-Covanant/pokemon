let keyWDown = false;
let keyADown = false;
let keySDown = false;
let keyDDown = false;

window.addEventListener("keydown", function (e) {
  console.log(document.getElementById("playerImg").src);
  if (e.code == "KeyW") {
    player.vyu = -player.speed;
    keyWDown = true;
  }
  if (e.code == "KeyA") {
    player.vxl = -player.speed;
    keyADown = true;
  }
  if (e.code == "KeyS") {
    player.vyd = player.speed;
    keySDown = true;
  }
  if (e.code == "KeyD") {
    player.vxr = player.speed;
    keyDDown = true;
  }
});

window.addEventListener("keyup", function (e) {
  if (e.code == "KeyW") {
    player.vyu = 0;
    keyWDown = false;
  }
  if (e.code == "KeyA") {
    player.vxl = 0;
    keyADown = false;
  }
  if (e.code == "KeyS") {
    player.vyd = 0;
    keySDown = false;
  }
  if (e.code == "KeyD") {
    player.vxr = 0;
    keyDDown = false;
  }
});
