import { React, useState, useEffect } from "react";
import "./App.css";
import "@fontsource/orbitron";

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  let seconds = time.getSeconds();
  let minutes = time.getMinutes();
  let hour24 = time.getHours();
  let hour12 = hour24 % 12 || 12;
  let ampm = hour24 >= 12 ? "PM" : "AM";

  const timerStyling = [
    {
      value: hour12.toString().padStart(2, "0"),
      label: "Hours",
    },
    {
      value: minutes.toString().padStart(2, "0"),
      label: "Minutes",
    },
    {
      value: seconds.toString().padStart(2, "0"),
      label: "Seconds",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[Orbitron] mb-6">
          Digital Clock
        </h1>


        <div className="flex flex-col md:flex-row items-center justify-center gap-y-5 md:gap-y-0 gap-x-4 md:gap-x-12 lg:gap-x-16">
          {/* Timer */}
          {timerStyling.map((styling) => (
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-[Orbitron] leading-none tabular-nums w-28 h-28 md:w-36 md:h-36 inline-flex items-center justify-center bg-black/50 text-white rounded-md">
                {styling.value}
              </span>
              <span className="text-sm md:text-base text-white/70 mt-2 inline-flex items-center justify-center bg-black/50 w-28 h-8 md:w-36 rounded">
                {styling.label}
              </span>
            </div>
          ))}

          {/* AM/PM */}
          <div className="flex flex-col items-center">
            <span className="text-base md:text-lg lg:text-xl font-semibold leading-none tracking-widest w-20 h-8 inline-flex items-center justify-center bg-black/50 text-white rounded mt-2 md:mt-[155px]">
              {ampm}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
