// EasyModeToggle.tsx
import React from 'react';

interface EasyModeToggleProps {
  easyMode: boolean;
  setEasyMode: (value: boolean) => void;
}

const EasyModeToggle: React.FC<EasyModeToggleProps> = ({ easyMode, setEasyMode }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={easyMode}
            onChange={(e) => setEasyMode(e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
        <span className="text-sm font-medium">Easy Mode</span>
      </div>
      
      <div className="relative group">
        <button
          type="button"
          className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full"
          aria-label="Easy mode information"
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
        <div className="absolute bottom-full mb-2 hidden group-hover:block">
          <div className="bg-black text-white text-xs rounded px-2 py-1 w-48 whitespace-normal">
            When easy mode is on, words that are correct but in the wrong row will turn gray!
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyModeToggle;