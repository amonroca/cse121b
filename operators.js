let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function isHit() {
    let num = Math.random() * 1;
    
    if (num > 0.5) {
        return true;
    }
    else {
        return false;
    }
}

function shipCanFire() {

    if (shipAmmo > 0 && shipHealth > 0) {
        return true;
    }
    else {
        return false;
    }
}

function isDestroyed(health) {

    if (health <= 0) {
        return true;
    }
    else {
        return false;
    }
}

function reloadShip() {

    if (shipAmmo <= 0) {
        shipHealth--;
        shipAmmo = 3;
    }
}

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

encounter();