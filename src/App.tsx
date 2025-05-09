import { useEffect } from 'react';
import './App.css';
import { Attributions } from './components/Attributions';

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
        audio.pause();
        audio.currentTime = 0;
      }, 500);
    });
  }, []);

  return (
    <>
      <div id='flash'></div>
      <input type='text' id='textInput' placeholder='scene info' />
      <button id='playButton'>Clap</button>
      <audio id='audioPlayer' src='race.mp3'></audio>

      <Attributions />
    </>
  );
};

export default App;
