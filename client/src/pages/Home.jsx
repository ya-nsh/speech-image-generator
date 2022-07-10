import Canvas from './Canvas';
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import SpeechtoText from '../components/utility/SpeechtoText';
const axios = require('axios').default;

export default function Home() {
  const [text, setText] = useState('');

  const getFromNode = txt => {
    axios.get(`http://localhost:8000/send?text=${txt}`).then(res => {
      toast.success('Text send to node.js', {
        position: toast.POSITION.TOP_CENTER,
        theme: 'dark'
      });
    });
  };

  const textFromSpeech = txt => {
    setText(txt);
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text === '') {
      return toast.error('Empty inputs are not allowed !', {
        position: toast.POSITION.TOP_CENTER,
        theme: 'dark'
      });
    }

    getFromNode(text);

    // clearing input fields
    setText('');
  };

  return (
    <div className="flex flex-col">
      <div className="flex-[3]">
        <Canvas />
      </div>
      <div className="flex justify-center mb-14">
        <div className="flex-grow-0 flex-shrink-0 basis-3/5">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  className="w-full pr-40 bg-gray-200 input input-lg text-black border-2 border-gray-200 focus:border-gray-800 focus:outline-none focus:bg-white focus:placeholder-gray-600"
                  placeholder="Enter your text"
                  value={text}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 w-36 btn btn-lg rounded-l-none"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        {text.length > 0 && (
          <div>
            <button
              className="btn btn-ghost btn-lg"
              onClick={e => {
                setText('');
              }}
            >
              Clear
            </button>
          </div>
        )}
        <ToastContainer />
      </div>
      <SpeechtoText textFromSpeech={textFromSpeech} />
    </div>
  );
}
