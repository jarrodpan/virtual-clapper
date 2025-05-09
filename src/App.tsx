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
        audio.pause();
        audio.currentTime = 0;
      }, 500);
    });
  }, []);

  return (
    <>
      <div id='flash'></div>
      <input type='text' id='textInput' placeholder='Type something...' />
      <button id='playButton'>Play Audio</button>
      <audio id='audioPlayer' src='race.mp3'></audio>
      <div>
        Sound Effect by{' '}
        <a href='https://pixabay.com/users/transcendedlifting-30596364/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=125125'>
          transcendedlifting
        </a>{' '}
        from{' '}
        <a href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=125125'>
          Pixabay
        </a>
      </div>
    </>
  );
};

export default App;
