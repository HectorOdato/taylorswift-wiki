import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const SongCard = ({ song, index, isOpen = false, onToggle = () => {} }) => {
  return (
    <div className="mb-3 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
      <button
        onClick={() => onToggle(index)}
        className="w-full px-5 py-4 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white flex items-center justify-between group transition-all"
      >
        <div className="text-left flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">{index + 1}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
              {song.title}
            </span>
          </div>
        </div>
        <ChevronDownIcon 
          className={`w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      
      {isOpen && (
        <div className="px-5 py-4 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
          <p className="text-gray-600 text-sm leading-relaxed">
            {song.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default SongCard;
