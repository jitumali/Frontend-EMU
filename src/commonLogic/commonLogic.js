import { useEffect, useState } from "react";

export const useDimensions = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const DimensionHandler = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    window.addEventListener("resize", DimensionHandler);
    return () => window.removeEventListener("resize", DimensionHandler);
  }, [width, height]);

  return { width, height };
};
