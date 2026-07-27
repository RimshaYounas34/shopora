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

  return (

    <div className="flex justify-center gap-5 mt-10">

      <div className="bg-white shadow rounded-2xl px-6 py-4 text-center w-24">
        <h2 className="text-3xl font-bold text-green-600">
          {time.days}
        </h2>

        <p className="text-gray-500 text-sm">
          Days
        </p>
      </div>

      <div className="bg-white shadow rounded-2xl px-6 py-4 text-center w-24">
        <h2 className="text-3xl font-bold text-green-600">
          {time.hours}
        </h2>

        <p className="text-gray-500 text-sm">
          Hours
        </p>
      </div>

      <div className="bg-white shadow rounded-2xl px-6 py-4 text-center w-24">
        <h2 className="text-3xl font-bold text-green-600">
          {time.minutes}
        </h2>

        <p className="text-gray-500 text-sm">
          Minutes
        </p>
      </div>

      <div className="bg-white shadow rounded-2xl px-6 py-4 text-center w-24">
        <h2 className="text-3xl font-bold text-green-600">
          {time.seconds}
        </h2>

        <p className="text-gray-500 text-sm">
          Seconds
        </p>
      </div>

    </div>

  );
}

export default CountdownTimer;