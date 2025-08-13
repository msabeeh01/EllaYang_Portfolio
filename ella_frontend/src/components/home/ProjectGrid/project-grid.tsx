

import React from "react";
import { PortfolioItem } from "@/types/cursor.types";
import { PortfolioItemCard } from "./project-item";


const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    title: "Brand Identity Cards",
    category: "Branding",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=500&fit=crop",
    title: "Mobile App Design",
    category: "UI/UX",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop",
    title: "Colorful Grid System",
    category: "Web Design",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
    title: "Data Visualization",
    category: "Infographic",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    title: "Vinyl Record Design",
    category: "Print Design",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=350&fit=crop",
    title: "Typography Poster",
    category: "Print Design",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=500&fit=crop",
    title: "App Interface Dark",
    category: "Mobile Design",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=280&fit=crop",
    title: "Book Layout Design",
    category: "Editorial",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&h=250&fit=crop",
    title: "Logo & Branding",
    category: "Branding",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=450&fit=crop",
    title: "Packaging Design",
    category: "Product Design",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=320&fit=crop",
    title: "3D Paper Art",
    category: "Art Direction",
  },
];

export const ProjectGrid = () => {


  // Simple function to distribute items into columns
  const getColumnItems = 
    (numColumns: number): PortfolioItem[][] => {
      // Create a 2d array, one for each column, using fill(null) to set each element to null
      const columns: PortfolioItem[][] = Array.from(
        { length: numColumns },
        () => []
      );

      //for each portfolio items, and populate array with items
      portfolioItems.forEach((item: PortfolioItem, index: number) => {
        const columnIndex = index % numColumns; //Column index calculates the remainder of the index divided by the number of columns, which is used to determine which column the item should be placed in
        //based on the column index, push the item into the corresponding column array
        columns[columnIndex].push(item);
      });

      return columns;
    };

  

  return (
    <div
      className="min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        {/* Desktop: 3 columns */}
        <div className="hidden lg:flex gap-4">
          {getColumnItems(3).map(
            (columnData: PortfolioItem[], columnIndex: number) => (
              <div key={columnIndex} className="flex-1 flex flex-col gap-4">
                {columnData.map((item: PortfolioItem) => (
                  <div key={item.id}>
                    <PortfolioItemCard item={item} />
                  </div>
                ))}
              </div>
            )
          )}
        </div>

        {/* Tablet: 2 columns */}
        <div className="hidden sm:flex lg:hidden gap-4">
          {getColumnItems(2).map((columnData, columnIndex) => (
            <div key={columnIndex} className="flex-1 flex flex-col gap-4">
              {columnData.map((item) => (
                <div key={item.id}>
                    <PortfolioItemCard item={item} />
                  </div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile: 1 column */}
        <div className="flex sm:hidden flex-col gap-4">
          {portfolioItems.map((item) => (
            <div key={item.id}>
                    <PortfolioItemCard item={item} />
                  </div>
          ))}
        </div>
      </div>
    </div>
  );
};
