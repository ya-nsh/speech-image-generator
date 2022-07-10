import React from 'react';
import { Link } from 'react-router-dom';
import searchImage from '../assets/search.jpg';

export default function About() {
  return (
    <div className="flex justify-center gap-16 align-middle items-center  p-14">
      <div>
        <h1 className="text-6xl mb-4">Generate images using your speech</h1>
        <p className="mb-4 text-2xl font-light">
          CLIP efficiently learns visual concepts from natural language
          supervision. CLIP can be applied to any visual classification
          benchmark by simply providing the names of the visual categories to be
          recognized, similar to the “zero-shot” capabilities of GPT-2 and
          GPT-3.
        </p>
        <p className="mt-4 text-sm font-bold">
          Made with React, Node and PyTorch
        </p>
      </div>
      <div className="">
        <Link to="/">
          <img
            src={searchImage}
            alt="search"
            className="rounded-xl w-[20em]   shadow-2xl"
          />
        </Link>
      </div>
    </div>
  );
}

// absolute right-0 bottom-[10em] mr-6 mb-10
// ml-auto mt-6
