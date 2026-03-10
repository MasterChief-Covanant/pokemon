class _PLAYER {
  constructor(x, y, vxl, vxr, vyu, vyd, speed) {
    this.x = x;
    this.y = y;
    this.vxl = vxl;
    this.vxr = vxr;
    this.vyu = vyu;
    this.vyd = vyd;
    this.speed = speed;
  }

  update() {
    this.x += this.vxl;
    this.x += this.vxr;
    this.y += this.vyu;
    this.y += this.vyd;

    document.getElementById("playerImg").style.left = this.x + "px";
    document.getElementById("playerImg").style.top = this.y + "px";

    if (keyWDown) {
      document.getElementById("playerImg").src =
        "SpriteAndMapSheet/stoppedAshBackward.png";
    }
    if (keyADown) {
      document.getElementById("playerImg").src =
        "SpriteAndMapSheet/stoppedAshLeft.png";
    }
    if (keySDown) {
      document.getElementById("playerImg").src =
        "SpriteAndMapSheet/stoppedAshForward.png";
    }
    if (keyDDown) {
      document.getElementById("playerImg").src =
        "SpriteAndMapSheet/stoppedAshRight.png";
    }
  }
}

let player = new _PLAYER(700, 325, 0, 0, 0, 0, 1);

class _HOUSEWALLS {
  constructor(trxc, tryc, tlxc, tlyc, brxc, bryc, blxc, blyc) {
    this.trxc = trxc;
    this.tryc = tryc;
    this.tlxc = tlxc;
    this.tlyc = tlyc;
    this.blxc = blxc;
    this.blyc = blyc;
    this.brxc = brxc;
    this.bryc = bryc;
  }
}

let houseWalls = new _HOUSEWALLS(381, 168, 137, 168, 381, 398, 137, 398);

function stopSprite() {
  if (player.x < 54) {
    player.x = 55;
  }
  if (player.x > 1322) {
    player.x = 1321;
  }
  if (player.x < houseWalls.trxc && player.y < houseWalls.bryc) {
    player.x = 382;
  }
  if (player.x > houseWalls.tlxc && player.y > houseWalls.blyc) {
    player.x = 137;
  }
  if (player.y < -11) {
    player.y = -10;
  }
  if (player.y > 729) {
    player.y = 728;
  }
}

function update() {
  player.update();
  requestAnimationFrame(update);
  stopSprite();
  document.body.style.overflow = "hidden";
  console.log(player.x, player.y);
}
update();
