import React, { useContext } from 'react';
import type { CustomCursorProps } from '@/types/cursor.types';
import { CursorContext } from '@/context/CursorContext';

export const CustomCursor: React.FC<CustomCursorProps> = ({
  size = 20,
  color = "black",
  hoverScale = 4,
  className = "",
}) => {
  const context = useContext(CursorContext);
  
  if (!context) {
    return null; // Don't render if no context
  }

  const { mousePosition, isHovering, cursorText } = context;

  const hasText = cursorText && cursorText.length > 0;

  return (
    <div
      className={`fixed pointer-events-none z-50 rounded-full transition-transform duration-100 ease-out flex items-center justify-center text-center ${className}`}
      style={{
        top: mousePosition.y - size / 2,
        left: mousePosition.x - size / 2,
        transform: `scale(${isHovering ? hoverScale : 1})`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        border: `1px solid white`,
      }}
    >
      {hasText && (
        <p className="text-[3px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-semibold text-white">
          {cursorText}
        </p>
      )}
    </div>
  );
};