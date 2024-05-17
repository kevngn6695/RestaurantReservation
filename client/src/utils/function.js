import { useState, useEffect, useRef } from "react";

export const capitalizeFirst = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const convertKtoF = (kelvin) => {
  return Math.round(((kelvin - 273.15) * 9) / 5 + 32);
};

export const useLazyLoad = (options) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      options,
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};
