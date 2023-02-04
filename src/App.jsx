import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  // Show the image in the center of the screen. When we click on the image,
  // it should jump a little bit in the air and then come back down.
  function handleClick() {
    setCount(count + 1);
    // Animate the trout by moving it up and down once.
    const trout = document.querySelector("img");
    trout.style.transform = "translateY(-10px)";
    setTimeout(() => {
      trout.style.transform = "translateY(0px)";
    }, 100);
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl  mb-4">
        {count === 0 ? "Tap the trout!" : `You tapped ${count} times!`}
      </h1>
      <button onClick={handleClick}>
        <img src="/trout.png" className="w-64 h-auto transform" />
      </button>
    </div>
  );
}

export default App;
