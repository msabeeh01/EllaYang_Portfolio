export interface CursorContextType {
    mousePosition: MousePosition;
    isHovering: boolean;
    registerHoverElement: (element: HTMLElement, text?: string) => () => void;
    cursorText?: string | null; // Optional text to display in the cursor
    setCursorText?: (text: string) => void; // Optional function to set cursor text
}
export interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: string;
}
export interface MousePosition {
  x: number;
  y: number;
}

export interface CustomCursorProps {
    size?: number; // Size of the cursor in pixels
    color?: string; // Color of the cursor
    hoverScale?: number; // Scale factor for the cursor when hovering over an element    
    className?: string; // Additional CSS classes to apply to the cursor element
    }