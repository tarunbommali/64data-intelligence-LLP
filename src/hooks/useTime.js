import { useEffect, useState } from "react";
import { DateTime } from "luxon";

const useTime = () => {
  const [time, setTime] = useState(DateTime.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(DateTime.now().setZone("Asia/Kolkata"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return time;
};

export default useTime;
