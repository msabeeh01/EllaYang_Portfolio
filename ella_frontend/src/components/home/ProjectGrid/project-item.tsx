"use client";
import { useCursorHover } from "@/hooks/useCursorHover";
import { PortfolioItem } from "@/types/cursor.types";
import React, { useCallback, useEffect, useRef, useState } from "react";

export const PortfolioItemCard = ({ item }: { item: PortfolioItem }) => {
  const hoverRef = useCursorHover(`${item.title}`);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = hoverRef.current;
    if (element) {
      const handleMouseEnter = () => {
        setIsHovered(true);
      };
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div
      ref={hoverRef}
      className={`bg-[#e9e9e9] overflow-hidden transition-shadow duration-300 ${
        isHovered ? "shadow-lg" : "shadow-sm" 
      } p-4 sm:p-6 md:p-8`}
    >
      <div className="relative w-full">
        <img
          src={item.image}
          alt={item.title}
          className={`w-full h-auto object-cover ${
            isHovered ? "scale-105" : "scale-100"
          } transition-transform duration-300`}
        />
        <div
          className={`absolute inset-0  ${
            isHovered ? "bg-opacity-30" : "bg-opacity-0"
          } transition-all duration-300 flex items-end`}
        >
        </div>
      </div>
    </div>
  );
};