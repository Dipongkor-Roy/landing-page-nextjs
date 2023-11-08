"use client"; //declare to use as a client component
import React, { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPostion, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition); //event,function
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return scrollPostion;
};

export default useScrollPosition;
