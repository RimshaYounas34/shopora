
import { useEffect, useState } from "react";

function CountdownTimer() {
  const targetTime =
    new Date().getTime() + 2 * 24 * 60 * 60 * 1000;

  const calculateTime = () => {
    const now = new Date().getTime();
    const difference = targetTime - now;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(
        Math.floor(difference / (1000 * 60 * 60 * 24))
      ).padStart(2, "0"),

      hours: String(
        Math.floor(
          (difference % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        )
      ).padStart(2, "0"),

      minutes: String(
        Math.floor(
          (difference % (1000 * 60 * 60)) /
            (1000 * 60)
        )
      ).padStart(2, "0"),

      seconds: String(
        Math.floor(
          (difference % (1000 * 60)) / 1000
        )
      ).padStart(2, "0"),
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    {
      value: time.days,
      label: "Days",
    },
    {
      value: time.hours,
      label: "Hours",
    },
    {
      value: time.minutes,
      label: "Minutes",
    },
    {
      value: time.seconds,
      label: "Seconds",
    },
  ];

  return (
    <div className="w-full flex justify-center mt-8 sm:mt-10 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5 w-full max-w-2xl">
        {timeUnits.map((unit, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-lg rounded-xl sm:rounded-2xl px-3 py-4 sm:px-5 sm:py-5 md:px-6 md:py-4 text-center w-full transition duration-300"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600">
              {unit.value}
            </h2>

            <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-1">
              {unit.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountdownTimer;

