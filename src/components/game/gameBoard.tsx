import { useEffect, useRef, useState } from "react";
import Ghost from "../../content/game/classes/ghosts";
import Pacman from "../../content/game/classes/pacman";
import { useSwipeable } from "react-swipeable";
import {
  onBlocksSize,
  wallInnerColor,
  wallOffset,
  wallSpaceWidth,
  DIRECTION_BOTTOM,
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_UP,
  map,
} from "../../content/game/constant";
import { popupContent } from "../../content/game/pageContent";

type Prop = {
  collideTask: (ind: number) => void;
  startGame: boolean;
  fps: number;
  showPausePopup: boolean;
  pauseGame: () => void;
  category: string;
  showGhostPopup: (restartGame: () => void) => void;
  stepIndex: number;
  ghostCount: number;
};

const GameBoard = ({
  ghostCount,
  showGhostPopup,
  fps,
  category,
  showPausePopup,
  pauseGame,
  stepIndex,
  collideTask,
  startGame,
}: Prop) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pacmanFrames = useRef<HTMLImageElement | null>(null);
  const ghostFrames = useRef<HTMLImageElement | null>(null);
  const [restartTheGame, setrestartTheGame] = useState(false);
  const pacmanRef = useRef<Pacman | null>(null);
  const ghostsRef = useRef<Ghost[] | null>(null);

  interface CreateRectProp {
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
  }

  function createRect({ x, y, width, height, color }: CreateRectProp) {
    const canvasContext = canvasRef.current?.getContext("2d");
    if (canvasContext == null) {
      return null;
    }
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
  }

  let ghostImageLocations = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 121 },
    { x: 176, y: 121 },
  ];

  interface UdateInterface {
    pacman: Pacman;
    ghosts: Array<Ghost>;
  }

  let update = ({ pacman, ghosts }: UdateInterface) => {
    if (!startGame) return;
    pacman.moveProcess();
    pacman.eat();
    updateGhosts({ ghosts });
    if (pacman.checkGhostCollision(ghosts) !== -1) {
      // restartGame();
      showGhostPopup(restartGame);
    }
  };

  let restartGame = () => {
    pacmanRef.current = null;
    ghostsRef.current = null;
    setrestartTheGame((prev) => !prev);
    // drawFoods();
    drawImage();
  };

  function drawAchievementIcon(
    ind: number,
    i: number,
    j: number,
    canvasContext: CanvasRenderingContext2D
  ) {
    const img = new Image();
    img.src = popupContent[category as string][stepIndex].actions[ind - 1].icon;
    // Replace this with the path to your image file
    img.style.cursor = "pointer";
    // Determine the coordinates and size for your image
    const x = j * onBlocksSize + onBlocksSize / 20;
    const y = i * onBlocksSize + onBlocksSize / 20;
    const width = 22;
    const height = 18;
    // Draw the image on the canvas once it's loaded
    canvasContext.drawImage(img, x, y, width, height);
  }

  let drawImage = () => {
    const canvasContext = canvasRef.current?.getContext("2d");
    if (!canvasContext || !canvasRef) return;

    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[0].length; j++) {
        if (map[i][j] === 4) {
          drawAchievementIcon(1, i, j, canvasContext);
        } else if (map[i][j] === 8) {
          drawAchievementIcon(5, i, j, canvasContext);
        } else if (map[i][j] === 7) {
          drawAchievementIcon(4, i, j, canvasContext);
        } else if (map[i][j] === 6) {
          drawAchievementIcon(3, i, j, canvasContext);
        } else if (map[i][j] === 5) {
          drawAchievementIcon(2, i, j, canvasContext);
        }
      }
    }
  };

  // let drawFoods = () => {
  //   for (let i = 0; i < map.length; i++) {
  //     for (let j = 0; j < map[0].length; j++) {
  //       if (map[i][j] == 2) {
  //         createRect({
  //           x: j * onBlocksSize + onBlocksSize / 3,
  //           y: i * onBlocksSize + onBlocksSize / 3,
  //           width: onBlocksSize / 3,
  //           height: onBlocksSize / 3,
  //           color: foodColor,
  //         });
  //       }
  //     }
  //   }
  // };

  // let drawScore = () => {};

  interface UpdateGhostsProp {
    ghosts: Array<Ghost>;
  }

  let updateGhosts = ({ ghosts }: UpdateGhostsProp) => {
    for (let i = 0; i < ghosts.length; i++) {
      ghosts[i].moveProcess();
    }
  };

  let drawGhosts = ({ ghosts }: UpdateGhostsProp) => {
    for (let i = 0; i < ghosts?.length; i++) {
      ghosts[i].draw();
    }
  };

  let draw = ({ pacman, ghosts }: UdateInterface) => {
    const canvasContext = canvasRef.current?.getContext("2d");
    if (canvasContext == null) return;
    if (canvasRef.current == null) return;

    canvasContext.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    createRect({
      x: 0,
      y: 0,
      width: canvasRef.current.width,
      height: canvasRef.current.height,
      color: "transparent",
    });
    drawWalls();
    drawImage();
    // drawFoods();
    drawGhosts({ ghosts });
    pacman?.draw();
    // drawScore();
  };

  let drawWalls = () => {
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[0].length; j++) {
        if (map[i][j] === 1) {
          createRect({
            x: j * onBlocksSize,
            y: i * onBlocksSize,
            width: onBlocksSize,
            height: onBlocksSize,
            color: "white",
          });
          if (j > 0 && map[i][j - 1] === 1) {
            createRect({
              x: j * onBlocksSize,
              y: i * onBlocksSize + wallOffset,
              width: wallSpaceWidth + wallOffset,
              height: wallSpaceWidth,
              color: wallInnerColor,
            });
          }

          if (j < map[0].length - 1 && map[i][j + 1] === 1) {
            createRect({
              x: j * onBlocksSize + wallOffset,
              y: i * onBlocksSize + wallOffset,
              width: wallSpaceWidth + wallOffset,
              height: wallSpaceWidth,
              color: wallInnerColor,
            });
          }

          if (i < map.length - 1 && map[i + 1][j] === 1) {
            createRect({
              x: j * onBlocksSize + wallOffset,
              y: i * onBlocksSize + wallOffset,
              width: wallSpaceWidth,
              height: wallSpaceWidth + wallOffset,
              color: wallInnerColor,
            });
          }

          if (i > 0 && map[i - 1][j] === 1) {
            createRect({
              x: j * onBlocksSize + wallOffset,
              y: i * onBlocksSize,
              width: wallSpaceWidth,
              height: wallSpaceWidth + wallOffset,
              color: wallInnerColor,
            });
          }
        }
      }
    }
  };

  const handlers = useSwipeable({
    onSwipedUp: () => handleSwipe(DIRECTION_UP),
    onSwipedDown: () => handleSwipe(DIRECTION_BOTTOM),
    onSwipedLeft: () => handleSwipe(DIRECTION_LEFT),
    onSwipedRight: () => handleSwipe(DIRECTION_RIGHT),
  });

  const handleSwipe = (direction: number) => {
    if (pacmanRef.current === null) return;

    pacmanRef.current.nextDirection = direction;
  };

  useEffect(() => {
    pacmanRef.current?.drawTasksAgain(
      stepIndex === 0 || stepIndex === 3
        ? 1
        : stepIndex === 1 || stepIndex === 4
        ? 2
        : 3
    );
    restartGame();
  }, [stepIndex]);

  useEffect(() => {
    const canvasContext: any = canvasRef.current?.getContext("2d");
    if (!canvasContext || !pacmanFrames) return;

    if (pacmanRef.current === null) {
      pacmanRef.current = new Pacman(
        220,
        220,
        onBlocksSize,
        onBlocksSize,
        onBlocksSize / 5,
        canvasContext,
        pacmanFrames,
        collideTask
      );
    }
    if (ghostsRef.current === null && pacmanRef.current !== null) {
      const ghosts: Array<Ghost> = [];
      for (let i = 0; i < ghostCount; i++) {
        let newGhost = new Ghost(
          onBlocksSize,
          onBlocksSize,
          onBlocksSize,
          onBlocksSize,
          pacmanRef.current.speed / 2,
          ghostImageLocations[i % 4].x,
          ghostImageLocations[i % 4].y,
          124,
          116,
          6 + i,
          pacmanRef.current,
          canvasContext,
          ghostFrames
        );
        ghosts.push(newGhost);
      }
      ghostsRef.current = ghosts;
    }
    function gameLoop() {
      if (pacmanRef.current !== null && ghostsRef.current !== null) {
        draw({ pacman: pacmanRef.current!, ghosts: ghostsRef.current! });
        update({ pacman: pacmanRef.current!, ghosts: ghostsRef.current! });
      }
    }

    // Add event listener for mousemove
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      const mouseX = event.clientX - rect!.left;
      const mouseY = event.clientY - rect!.top;

      // Calculate the row and column in the 2D array based on mouse coordinates
      const row = Math.floor(mouseY / onBlocksSize);
      const col = Math.floor(mouseX / onBlocksSize);
      if (col === undefined || row === undefined) return;
      if (col <= 23 && col >= 0 && row >= 0 && row <= 23) {
        // Access the value in the 2D array
        const cellValue = map[row][col];
        // Check if the cursor is over a specific cell and update the cursor style
        if (cellValue !== undefined) {
          // Create a message element
          const messageElement = document.createElement("div");
          if (
            cellValue === 4 ||
            cellValue === 5 ||
            cellValue === 6 ||
            cellValue === 7 ||
            cellValue === 8
          ) {
            // Get the coordinates for the center of the achievement cell
            const cellCenterX = col * onBlocksSize + onBlocksSize / 2;
            const cellCenterY = row * onBlocksSize + onBlocksSize / 2;

            messageElement.textContent =
              popupContent[category][stepIndex].actions[cellValue - 4].title;
            messageElement.className = "achievement-message";

            // Position the message near the achievement cell
            messageElement.style.left = `${cellCenterX}px`;
            messageElement.style.top = `${cellCenterY + 30}px`;

            // Append the message element to the document body
            document.getElementById("gameBoard")!.appendChild(messageElement);

            // Set a timeout to remove the message after 2 seconds
            setTimeout(() => {
              document.getElementById("gameBoard")!.removeChild(messageElement);
            }, 2000);
            // alert(cellValue);
            // showAlert(cellValue);
            canvasRef.current!.style.cursor = "pointer";
          } else {
            canvasRef.current!.style.cursor = "default";
          }
        }
      }
    };

    let gameInterval = setInterval(gameLoop, 1000 / fps);

    function move(event: KeyboardEvent) {
      if (pacmanRef.current === null) return;

      let k = event.key;
      setTimeout(() => {
        if (k === "a" || k === "ArrowLeft") {
          // left arrow or a
          pacmanRef.current!.nextDirection = DIRECTION_LEFT;
        } else if (k === "w" || k === "ArrowUp") {
          // up arrow or w
          pacmanRef.current!.nextDirection = DIRECTION_UP;
        } else if (k === "d" || k === "ArrowRight") {
          // right arrow or d
          pacmanRef.current!.nextDirection = DIRECTION_RIGHT;
        } else if (k === "s" || k === "ArrowDown") {
          // bottom arrow or s
          pacmanRef.current!.nextDirection = DIRECTION_BOTTOM;
        }
      }, 1);
    }
    document.addEventListener("keydown", move);
    // Add mousemove event listener
    canvasRef.current?.addEventListener("mousemove", handleMouseMove);
    // Cleanup
    return () => {
      canvasRef.current?.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("keydown", move);
      clearInterval(gameInterval);
    };
  }, [
    collideTask,
    fps,
    ghostImageLocations,
    restartTheGame,
    pacmanFrames,
    startGame,
    pacmanRef.current,
    ghostsRef.current,
  ]);

  return (
    <div
      {...handlers}
      style={{
        touchAction: "none",
      }}
      id="gameBoard"
      className="bg-none flex items-center relative m-auto justify-center"
    >
      {showPausePopup && (
        <img
          onClick={() => pauseGame()}
          alt="pause"
          src="/pause.png"
          className="absolute"
        />
      )}
      <canvas
        ref={canvasRef}
        className="m-4"
        id="canvas"
        width={460}
        onClick={() => pauseGame()}
        height={460}
      ></canvas>
      <div className="hidden">
        <img
          ref={pacmanFrames}
          id="pacman"
          alt="pac"
          src="/entrepreneur.png"
          width={140}
          height={50}
        />
        <img
          ref={ghostFrames}
          id="ghosts"
          alt="ghost"
          src="/ghost.png"
          width={140}
          height={20}
        />
      </div>
    </div>
  );
};

export default GameBoard;
