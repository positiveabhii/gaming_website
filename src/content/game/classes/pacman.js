import {
  DIRECTION_BOTTOM,
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_UP,
  //   score,
  renderMap,
  map,
  onBlocksSize,
} from "../constant";

class Pacman {
  constructor(
    x,
    y,
    width,
    height,
    speed,
    canvasContext,
    pacmanFrames,
    collideTask
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.direction = 4;
    this.nextDirection = 4;
    this.frameCount = 7;
    this.currentFrame = 1;
    this.canvasContext = canvasContext;
    this.pacmanFrames = pacmanFrames;
    this.collideTask = collideTask;
    setInterval(() => {
      this.changeAnimation();
    }, 100);
  }

  moveProcess() {
    this.changeDirectionIfPossible();
    this.moveForwards();
    if (this.checkCollisions()) {
      this.moveBackwards();
      return;
    }
  }

  drawTasksAgain(level) {
    renderMap({ level: level });
  }

  eat() {
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[0].length; j++) {
        if (this.getMapX() === j && this.getMapY() === i) {
          if (map[i][j] === 4) {
            this.collideTask(4);
          } else if (map[i][j] === 5) {
            this.collideTask(5);
          } else if (map[i][j] === 6) {
            this.collideTask(6);
          } else if (map[i][j] === 7) {
            this.collideTask(7);
          } else if (map[i][j] === 8) {
            this.collideTask(8);
          } 
          // else if (map[i][j] === 9) {
          //   this.collideTask(9);
          // }
          map[i][j] = 3;
          //   score++;
        }
      }
    }
  }

  moveBackwards() {
    switch (this.direction) {
      case DIRECTION_RIGHT: // Right
        this.x -= this.speed;
        break;
      case DIRECTION_UP: // Up
        this.y += this.speed;
        break;
      case DIRECTION_LEFT: // Left
        this.x += this.speed;
        break;
      case DIRECTION_BOTTOM: // Bottom
        this.y -= this.speed;
        break;
      default:
        this.x += 0;
        break;
    }
  }

  moveForwards() {
    switch (this.direction) {
      case DIRECTION_RIGHT: // Right
        this.x += this.speed;
        break;
      case DIRECTION_UP: // Up
        this.y -= this.speed;
        break;
      case DIRECTION_LEFT: // Left
        this.x -= this.speed;
        break;
      case DIRECTION_BOTTOM: // Bottom
        this.y += this.speed;
        break;
      default:
        this.x += 0;
        break;
    }
  }

  checkCollisions() {
    let isCollided = false;
    if (
      map[parseInt(this.y / onBlocksSize)][parseInt(this.x / onBlocksSize)] ===
        1 ||
      map[parseInt(this.y / onBlocksSize + 0.9999)][
        parseInt(this.x / onBlocksSize)
      ] === 1 ||
      map[parseInt(this.y / onBlocksSize)][
        parseInt(this.x / onBlocksSize + 0.9999)
      ] === 1 ||
      map[parseInt(this.y / onBlocksSize + 0.9999)][
        parseInt(this.x / onBlocksSize + 0.9999)
      ] === 1
    ) {
      isCollided = true;
    }
    return isCollided;
  }

  checkGhostCollision(ghosts) {
    for (let i = 0; i < ghosts.length; i++) {
      let ghost = ghosts[i];
      if (
        ghost.getMapX() === this.getMapX() &&
        ghost.getMapY() === this.getMapY()
      ) {
        return i;
      }
    }
    return -1;
  }

  changeDirectionIfPossible() {
    if (this.direction === this.nextDirection) return;
    let tempDirection = this.direction;
    this.direction = this.nextDirection;
    this.moveForwards();
    if (this.checkCollisions()) {
      this.moveBackwards();
      this.direction = tempDirection;
    } else {
      this.moveBackwards();
    }
  }

  getMapX() {
    let mapX = parseInt(this.x / onBlocksSize);
    return mapX;
  }

  getMapY() {
    let mapY = parseInt(this.y / onBlocksSize);

    return mapY;
  }

  getMapXRightSide() {
    let mapX = parseInt((this.x * 0.99 + onBlocksSize) / onBlocksSize);
    return mapX;
  }

  getMapYRightSide() {
    let mapY = parseInt((this.y * 0.99 + onBlocksSize) / onBlocksSize);
    return mapY;
  }

  changeAnimation() {
    // this.currentFrame =
    //   this.currentFrame == this.frameCount ? 1 : this.currentFrame + 1;
  }

  draw() {
    this.canvasContext.save();
    this.canvasContext.translate(
      this.x + onBlocksSize / 2,
      this.y + onBlocksSize / 2
    );
    this.canvasContext.rotate((this.direction * 90 * Math.PI) / 180);
    this.canvasContext.translate(
      -this.x - onBlocksSize / 2,
      -this.y - onBlocksSize / 2
    );
    this.canvasContext.drawImage(
      this.pacmanFrames.current,
      (this.currentFrame - 1) * onBlocksSize,
      0,
      onBlocksSize,
      onBlocksSize,
      this.x,
      this.y,
      onBlocksSize,
      onBlocksSize
    );
    this.canvasContext.restore();
  }
}
export default Pacman;
