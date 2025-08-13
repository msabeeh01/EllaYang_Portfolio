"use client"

import { CursorContextType } from "@/types/cursor.types";
import { createContext } from "react";

export const CursorContext = createContext<CursorContextType | null>(null);