import React from "react";

interface QuoteCardProps {
  bgColor?: string; // Background color
  quote: string;    // The quote text
  author: string;   // The author of the quote
  description: string; // Description text
}

const QuoteCard: React.FC<QuoteCardProps> = ({ 
  bgColor = "bg-green-500", // Default background color
  quote, 
  author, 
  description 
}) => {
  return (
    <div className="flex items-center justify-center font-Inter w-[300px] min-h-96">
      <div className={`max-w-md p-6 rounded-lg text-white shadow-md ${bgColor}`}>
        <p className="text-xl  mb-4">{`"${quote}"`}</p>
        <p className="font-semibold text-lg mb-4">{`- ${author}`}</p>
        <p className="text-base font-light">{description}</p>
      </div>
    </div>
  );
};

export default QuoteCard;