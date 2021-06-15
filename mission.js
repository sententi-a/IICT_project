function giftmission() {
  if (missionsuc1 == 1) {
    image(giftsuc, 0, 0, width, height);
  } else if (missionsuc1 == 0) {
    image(giftfail, 0, 0, width, height);
  }
}

function moviemission() {
  if (missionsuc2 == 1) {
    image(moviesuc, 0, 0, width, height);
  } else if (missionsuc2 == 0) {
    image(moviefail, 0, 0, width, height);
  }
}

function flowermission() {
  if (missionsuc3 == 1) {
    image(flowersuc, 0, 0, width, height);
  } else if (missionsuc3 == 0) {
    image(flowerfail, 0, 0, width, height);
  }
}

function allmission() {
  giftmission();
  moviemission();
  flowermission();
}

function xxx() {
  image(giftfail, 0, 0, width, height);
  image(moviefail, 0, 0, width, height);
  image(flowerfail, 0, 0, width, height);
}

function oxx() {
  image(giftsuc, 0, 0, width, height);
  image(moviefail, 0, 0, width, height);
  image(flowerfail, 0, 0, width, height);
}

function day2xx() {
  image(moviefail, 0, 0, width, height);
  image(flowerfail, 0, 0, width, height);
}

function day2ox() {
  image(moviesuc, 0, 0, width, height);
  image(flowerfail, 0, 0, width, height);
}

function xxo() {
  image(giftfail, 0, 0, width, height);
  image(moviefail, 0, 0, width, height);
  image(flowersuc, 0, 0, width, height);
}

function oox() {
  image(giftsuc, 0, 0, width, height);
  image(moviesuc, 0, 0, width, height);
  image(flowerfail, 0, 0, width, height);
}

function oxo() {
  image(giftsuc, 0, 0, width, height);
  image(moviefail, 0, 0, width, height);
  image(flowersuc, 0, 0, width, height);
}

function xoo() {
  image(giftfail, 0, 0, width, height);
  image(moviesuc, 0, 0, width, height);
  image(flowersuc, 0, 0, width, height);
}

function ooo() {
  image(giftsuc, 0, 0, width, height);
  image(moviesuc, 0, 0, width, height);
  image(flowersuc, 0, 0, width, height);
}
