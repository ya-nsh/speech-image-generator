import React, { useState, useEffect } from 'react';
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = 'en-US';

export default function SpeechtoText({ textFromSpeech }) {
  const [isLListening, setIsLListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    mic.addEventListener('result', e => {
      const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
      setTranscript(transcript);
      textFromSpeech(transcript);
    });
  }, []);

  const toggleListen = () => {
    if (isLListening) {
      mic.stop();
      setIsLListening(false);
    } else {
      mic.start();
      setIsLListening(true);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <button className="btn btn-wide" onClick={toggleListen}>
        {isLListening ? 'Stop ✋' : 'Speak 🚀'}
      </button>
      <div className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"></div>
    </div>
  );
}
