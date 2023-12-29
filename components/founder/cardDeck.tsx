import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(Draggable);

type CardInfo = { title: string; para: string };

type CardDeckProp = {
  img: string;
  founderData: { [key: string]: CardInfo };
};

const cardWidth = "212px";
const cardHeight = "315px";

const CardDeck = ({ founderData, img }: CardDeckProp) => {
  const [leftPressed, setLeftPressed] = useState<any>(null);
  const [rightPressed, setRightPressed] = useState<any>(null);

  const onLeftPressed = () => {
    setLeftPressed((prev: any) => !prev);
  };

  const onRightPressed = () => {
    setRightPressed((prev: any) => !prev);
  };
  const cardsList = ["8", "A", "K", "Q", "J", "10", "9"];
  const [deck, setDeck] = useState(cardsList);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const lastActionRef = useRef<string | null>(null);

  const animateToBackOfDeck = ({
    target,
    card,
    index,
  }: {
    target: HTMLDivElement;
    card: HTMLDivElement;
    index: number;
  }) => {
    gsap.to(target, {
      x: 0,
      y: 0,
      scale: 0.9,
      zIndex: 0,
      rotation: (cardRefs.current.length - 1) * 5,
      duration: 0.35,
      onComplete: function () {
        gsap.set(card, { scale: 1 });
        const newDeck = [...deck];
        const newDeckRef = [...cardRefs.current];
        const [removed] = newDeck.splice(index, 1);
        const [removedRef] = newDeckRef.splice(index, 1);
        newDeck.push(removed);
        newDeckRef.push(removedRef);
        cardRefs.current = newDeckRef;
        setDeck(newDeck);
      },
    });
  };

  const animateToFrontOfDeck = ({
    target,
    card,
    index,
  }: {
    target: HTMLDivElement;
    card: HTMLDivElement;
    index: number;
  }) => {
    gsap.set(target, { zIndex: cardRefs.current.length + 1 });

    gsap.fromTo(
      target,
      { x: 250, y: 0 },
      {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        onComplete: function () {
          gsap.set(card, { scale: 1 });
          const newDeck = [...deck];
          const newDeckRef = [...cardRefs.current];
          const [removed] = newDeck.splice(index, 1);
          const [removedRef] = newDeckRef.splice(index, 1);
          newDeck.unshift(removed);
          newDeckRef.unshift(removedRef);
          cardRefs.current = newDeckRef;
          setDeck(newDeck);
        },
      }
    );
  };

  // Button handlers

  useEffect(() => {
    if (leftPressed !== null) {
      if (lastActionRef.current === null) return;
      lastActionRef.current = "right";
      gsap.set(cardRefs.current[cardRefs.current.length - 1], { scale: 0.9 });
      gsap.to(cardRefs.current[cardRefs.current.length - 1], {
        x: 250,
        scale: 1.1,
        duration: 0.25,
        onComplete: function () {
          animateToFrontOfDeck({
            target: cardRefs.current[cardRefs.current.length - 1],
            card: cardRefs.current[cardRefs.current.length - 1],
            index: cardRefs.current.length - 1,
          });
        },
      });
    }
  }, [leftPressed]);

  useEffect(() => {
    if (rightPressed !== null) {
      lastActionRef.current = "left";
      gsap.to(cardRefs.current[0], {
        x: -250,
        scale: 1.1,
        duration: 0.25,
        onComplete: function () {
          animateToBackOfDeck({
            target: cardRefs.current[0],
            card: cardRefs.current[0],
            index: 0,
          });
        },
      });
    }
  }, [rightPressed]);

  // drag handler
  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.set(card, { zIndex: deck.length - index });
      let prevPosition = `${(index + 1) * 5}`;
      if (lastActionRef.current === "right") {
        gsap.to(card, {
          rotation: `${index * 5}deg`,
          duration: 0.25,
        });
      } else {
        gsap.fromTo(
          card,
          { rotation: prevPosition },
          {
            rotation: `${index * 5}deg`,
            duration: 0.25,
          }
        );
      }

      Draggable.create(card, {
        type: "x,y",
        bounds: { minX: -200, maxX: 200, maxY: 200, minY: -200 },
        edgeResistance: 0.75,
        onDragEnd: function () {
          lastActionRef.current = "left";
          if (Math.abs(this.x) >= 50 || Math.abs(this.y) >= 50) {
            gsap.set(this.target, { zIndex: 0 });
            animateToBackOfDeck({ target: this.target, card, index });
          } else {
            gsap.to(this.target, { x: 0, y: 0 });
          }
        },
      });
    });
  }, [deck]);

  return (
    <div>
      <div className="flex items-center justify-center h-[400px] relative max-w-[1250px] mx-auto w-[90%]">
        {deck.map((card, index) => (
          <div
            className="rounded-[20px] absolute"
            style={{
              // border: "1px solid #D2D2D2",
              width: cardWidth,
              height: cardHeight,
              color: "#dadada",
              // background: "#141415",
              backgroundImage: "url('/CardFront1.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              boxShadow: "0px 5px 34px 0px rgba(0, 0, 0, 0.10)",
            }}
            key={index}
            ref={(el) => {
              if (el !== null) {
                cardRefs.current[index] = el;
              }
            }}
          >
            {card === "8" ? (
              <img
                alt="founder_card"
                src={img}
                style={{ width: cardWidth, height: cardHeight }}
                className="w-[212px] cursor-pointer"
              />
            ) : (
              <div className="relative p-6 w-[90%] mx-auto">
                {/* <h1 className="text-[#F89E19] text-[30px] font-extrabold">
                  {card}
                </h1>
                <img alt="brick" src="/brick.png" /> */}
                <h2 className="whitespace-nowrap text-[13px] font-bold mt-12">
                  {founderData[card as keyof CardInfo]?.title}
                </h2>
                <span className="text-[12px] font-medium">
                  {founderData[card as keyof CardInfo]?.para}
                </span>
              </div>
            )}
            {/* {card} */}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mb-4">
        <button className="bg-[#F89E19] p-2 rounded-md" onClick={onLeftPressed}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          className="bg-[#F89E19] p-2 rounded-md"
          onClick={onRightPressed}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default CardDeck;
