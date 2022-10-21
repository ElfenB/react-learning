import './4.scss';

import { useEffect, useState } from 'react';

import { CurrentMeme } from './Four.types';
import { Display } from './Display';
import { Header } from '../4/Header';
import { Interaction } from './Interaction';
import { api_data } from './api-data';

export function Four() {
  const testdata = api_data.data.memes;
  const data = testdata;

  const [currentMeme, setCurrentMeme] = useState<CurrentMeme>({ bottomText: 'bottom', meme: data[0], topText: 'top' });
  const displayNew = () =>
    setCurrentMeme((prevCurrMeme) => ({
      ...prevCurrMeme,
      meme: data[Math.floor(Math.random() * data.length)],
    }));

  const setText = (fieldName: string, newText: string) =>
    setCurrentMeme((prevCurrMeme) => ({
      ...prevCurrMeme,
      [fieldName]: newText,
    }));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => displayNew(), []);

  return (
    <div>
      <Header />
      <Interaction data={currentMeme} getNewMeme={displayNew} setNewText={setText} />
      {currentMeme && <Display data={currentMeme} />}
    </div>
  );
}
