import { memo, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

const CONFETTI_DURATION = 3000;

function Confetti({ isExploding }) {
  return (
    <>
      {isExploding && (
        <div className="absolute overflow-hidden w-screen h-screen">
          <div className="flex flex-col items-center justify-center h-screen -my-20">
            <ConfettiExplosion
              colors={[
                "#f44336",
                "#e91e63",
                "#9c27b0",
                "#673ab7",
                "#3f51b5",
                "#2196f3",
                "#03a9f4",
                "#00bcd4",
                "#009688",
                "#4CAF50",
                "#8BC34A",
                "#CDDC39",
                "#FFEB3B",
                "#FFC107",
                "#FF9800",
                "#FF5722",
                "#795548",
              ]}
              duration={CONFETTI_DURATION}
              particleCount={100}
              height={800}
              width={500}
              force={0.5}
            />
          </div>
        </div>
      )}
    </>
  );
}
const SmartConfetti = memo(Confetti);

function App() {
  const [count, setCount] = useState(0);
  const [isExploding, setIsExploding] = useState(false);

  // Show the image in the center of the screen. When we click on the image,
  // it should jump a little bit in the air and then come back down.
  function handleClick() {
    setCount(count + 1);
    // Animate the trout by moving it up and down once.
    const trout = document.querySelector("img");
    const shadow = document.querySelector("#shadow");
    trout.style.transform = "translateY(-10px)";
    shadow.style.transform = "translateY(10px)";
    shadow.style.transform = "scale(1.2)";
    setTimeout(() => {
      trout.style.transform = "translateY(0px)";
      shadow.style.transform = "translateY(0px)";
      shadow.style.transform = "scale(1)";
    }, 100);

    // If the count is divisible by a power of 10, explode the confetti
    if ((count + 1).toString().match(/^10{1,}$/)) {
      setIsExploding(true);
      setTimeout(() => {
        setIsExploding(false);
      }, CONFETTI_DURATION);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">
        {count === 0 ? (
          "Tap the trout!"
        ) : (
          <span>
            You tapped <span className="text-zinc-800 font-bold">{count}</span>{" "}
            {count === 1 ? "time" : "times"}!
          </span>
        )}
      </h1>
      <SmartConfetti isExploding={isExploding}></SmartConfetti>
      <button onMouseDown={handleClick}>
        <img
          src="/trout.png"
          className="w-64 h-auto transform z-50 select-none drag-none"
        />
        <div className="flex flex-col z-0 items-center justify-center skew-y-[60deg] -rotate-[65deg] -translate-y-1/3">
          <div
            id="shadow"
            className="w-24 h-24 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-900 via-white opacity-10"
          ></div>
        </div>
      </button>
    </div>
  );
}

export default App;
