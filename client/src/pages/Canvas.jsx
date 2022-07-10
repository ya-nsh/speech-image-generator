import React from 'react';

export default function Canvas() {
  return (
    <>
      <h1 className="text-center mb-5 ">
        <span className="text-center mb-5 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-600 to-purple-400">
          Canvas
        </span>
      </h1>
      <div>
        <img
          src="https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg"
          alt="Canvas"
          className="w-32 border-4 border-indigo-500/50 hover:border-indigo-500/100 md:w-60 lg:w-3/6 mx-auto mb-20 rounded-lg hover:drop-shadow-2xl"
        />
      </div>
    </>
  );
}
