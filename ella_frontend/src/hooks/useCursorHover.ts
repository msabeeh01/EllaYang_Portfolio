"use client"

import { CursorContext } from "@/context/CursorContext"
import { useContext, useEffect, useRef } from "react"

export const useCursorHover = (text?: string) => {
    const context = useContext(CursorContext);
    if(!context){
        throw new Error("useCursorHover must be used within a CursorProvider");
    }

    // Create a ref to hold the element that will be registered for hover detection
    // This ref will be used to register the element with the cursor context
    const elementRef = useRef<HTMLDivElement | null>(null);

    // useEffect is used to register the element with the cursor context when the component mounts
    useEffect(() => {
        // If the elementRef is set, register it with the cursor context
        const element = elementRef.current;
        if(element) { 
            const cleanup = context.registerHoverElement(element, text);
            return cleanup
        }
    }, [context, text])

    return elementRef;
}