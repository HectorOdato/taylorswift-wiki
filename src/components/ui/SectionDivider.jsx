import React from 'react';


const SectionDivider = ({ title }) => {
  return (
    <div className="flex items-center w-full my-16 relative z-10">
      <div className="flex-grow h-1 bg-orange-600"></div>

      {title && (
        <h2 className="mx-6 text-black text-2xl md:text-5xl font-semibold tracking-wide">
          {title}
        </h2>
      )}

      <div className="flex-grow h-1 bg-orange-600"></div>
    </div>
  );
};

export default SectionDivider;
