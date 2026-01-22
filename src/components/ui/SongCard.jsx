import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const SongCard = ({ song, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3 border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-white hover:bg-gray-50 flex items-center justify-between"
      >
        <div className="text-left flex items-center gap-3">
          <span className="text-gray-500 font-semibold min-w-8">{index + 1}</span>
          <span className="font-semibold text-gray-800">{song.title}</span>
        </div>
        <ChevronDownIcon 
          className={`w-5 h-5 text-gray-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      
      {isOpen && (
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 text-sm leading-relaxed">{song.description}</p>
        </div>
      )}
    </div>
  );
};

export default SongCard;
