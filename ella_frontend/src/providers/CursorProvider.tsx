"use client"

import { CustomCursor } from "@/components/ui/CustomCursor/CustomCursor";
import { CursorContext } from "@/context/CursorContext";
import { CursorContextType, MousePosition } from "@/types/cursor.types";
import { useCallback, useEffect, useRef, useState } from "react";

interface CursorProviderProps {
  children: React.ReactNode;
}

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const hoverElements = useRef<Map<HTMLElement, string | undefined>>(new Map());

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      setMousePosition({ x: mouseX, y: mouseY });

      // Check if mouse is over any registered hover elements
      let foundHover = false;
      let foundText: string | null = null;
      
      hoverElements.current.forEach((text, element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            mouseX > rect.left &&
            mouseX < rect.right &&
            mouseY > rect.top &&
            mouseY < rect.bottom
          ) {
            foundHover = true;
            foundText = text || null;
          }
        }
      });

      setIsHovering(foundHover);
      setCursorText(foundText);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const registerHoverElement = useCallback((element: HTMLElement, text?: string) => {
    hoverElements.current.set(element, text);
    
    return () => {
      hoverElements.current.delete(element);
    };
  }, []);

  const contextValue: CursorContextType = {
    mousePosition,
    isHovering,
    cursorText,
    setCursorText,
    registerHoverElement,
  };

  return (
    <CursorContext.Provider value={contextValue}>
      <div style={{ cursor: 'none' }}>
        <CustomCursor />
        {children}
      </div>
    </CursorContext.Provider>
  );
};
