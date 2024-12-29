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
    </div>
  );
};

export default EasyModeToggle;