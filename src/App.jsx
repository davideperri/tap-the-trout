import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
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
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl  mb-4">
        {count === 0 ? "Tap the trout!" : `You tapped ${count} times!`}
      </h1>
      <button onMouseDown={handleClick}>
        <img
          src="/trout.png"
          className="w-64 h-auto transform z-50 select-none"
        />
        <div className="flex flex-col z-0 items-center justify-center skew-y-[60deg] -rotate-[65deg] -translate-y-1/3">
          <div
            id="shadow"
            class="w-24 h-24 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-900 via-white opacity-10"
          ></div>
        </div>
      </button>
    </div>
  );
}

export default App;
