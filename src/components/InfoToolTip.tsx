// InfoTooltip.tsx
import React from 'react';

interface InfoTooltipProps {
  tooltipText: string;
  ariaLabel?: string;
}

const InfoTooltip: React.FC<InfoTooltipProps> = ({ tooltipText, ariaLabel = "Information" }) => {
  return (
    <div className="relative group">
      <button
        type="button"
        className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full"
        aria-label={ariaLabel}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-4 h-4"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      </button>
      <div className="absolute hidden group-hover:block bottom-full right-0 mb-2 mr-1">
        <div className="bg-black text-white text-xs rounded px-2 py-1 w-48 whitespace-normal">
          {tooltipText}
        </div>
      </div>
    </div>
  );
};

export default InfoTooltip;
