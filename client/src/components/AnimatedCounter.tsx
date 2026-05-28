import { useEffect, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  duration?: number;
  suffix?: string;
};

const AnimatedCounter = ({
  value,
  duration = 1500,
  suffix = "",
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export default AnimatedCounter;
