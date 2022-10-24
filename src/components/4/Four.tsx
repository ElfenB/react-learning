import './4.scss';

import { useCallback, useEffect, useState } from 'react';

import { CurrentMeme } from './Four.types';
import { Display } from './Display';
import { Header } from '../4/Header';
import { Interaction } from './Interaction';
import { apiData } from './api-data';

export function Four() {
  const testdata = apiData.data.memes;
  const data = testdata;

  const getRandomMeme = useCallback(() => data[Math.floor(Math.random() * data.length)], [data]);

  const currentMemeInit = { bottomText: 'bottom', meme: getRandomMeme(), topText: 'top' };

  const [currentMeme, setCurrentMeme] = useState<CurrentMeme>(currentMemeInit);
  const displayNew = useCallback(
    () =>
      setCurrentMeme((prevCurrMeme) => ({
        ...prevCurrMeme,
        meme: getRandomMeme(),
      })),
    [getRandomMeme]
  );

  const setText = (fieldName: string, newText: string) =>
    setCurrentMeme((prevCurrMeme) => ({
      ...prevCurrMeme,
      [fieldName]: newText,
    }));

  useEffect(() => displayNew(), [displayNew]);

  return (
    <div>
      <Header />
      <Interaction data={currentMeme} getNewMeme={displayNew} setNewText={setText} />
      {currentMeme && <Display data={currentMeme} />}
    </div>
  );
}
