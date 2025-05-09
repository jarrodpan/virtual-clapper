import react from 'react';

const Attributions = () => {
  return (
    <div id='attributions'>
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
      <div>
        By new versión by{' '}
        <a href='//commons.wikimedia.org/wiki/User:Ebnz' title='User:Ebnz'>
          ebnz
        </a>{' '}
        - This W3C-unspecified{' '}
        <a
          href='https://en.wikipedia.org/wiki/Vector_images'
          className='extiw'
          title='w:Vector images'
        >
          vector image
        </a>{' '}
        was created with{' '}
        <a
          href='https://en.wikipedia.org/wiki/Inkscape'
          className='extiw'
          title='w:Inkscape'
        >
          Inkscape
        </a>{' '}
        .,{' '}
        <a
          href='https://creativecommons.org/licenses/by/2.5'
          title='Creative Commons Attribution 2.5'
        >
          CC BY 2.5
        </a>
        ,{' '}
        <a href='https://commons.wikimedia.org/w/index.php?curid=2001841'>
          Link
        </a>
      </div>
    </div>
  );
};

export { Attributions };
