import './4.scss';

import { useCallback, useEffect, useState } from 'react';

import { CurrentMeme } from './Four.types';
import { Display } from './Display';
import { Header } from '../4/Header';
import { Interaction } from './Interaction';
import { api_data } from './api-data';

export function Four() {
  const testdata = api_data.data.memes;
  const data = testdata;

  const [currentMeme, setCurrentMeme] = useState<CurrentMeme>({ bottomText: 'bottom', meme: data[0], topText: 'top' });
  const displayNew = useCallback(
    () =>
      setCurrentMeme((prevCurrMeme) => ({
        ...prevCurrMeme,
        meme: data[Math.floor(Math.random() * data.length)],
      })),
    [data]
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
