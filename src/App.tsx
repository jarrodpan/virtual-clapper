import { useEffect } from 'react';
import './App.css';

const getById = <T extends HTMLElement>(id: string) =>
  document.getElementById(id)! as T;

const App = () => {
  useEffect(() => {
    const button = document.getElementById('playButton')!;
    const audio = document.getElementById('audioPlayer')! as HTMLAudioElement;
    const flash = getById<HTMLDivElement>('flash');

    button.addEventListener('click', () => {
      audio.play();
      flash.style.display = 'block';

      setTimeout(() => {
        flash.style.display = 'none';
      }, 500);
    });
  }, []);

  return (
    <>
      <div id='flash'></div>
      <input type='text' id='textInput' placeholder='Type something...' />
      <button id='playButton'>Play Audio</button>
      <audio id='audioPlayer' src='your-audio-file.mp3'></audio>
    </>
  );
};

export default App;
