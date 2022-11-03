import './4.scss';

import { CurrentMeme, Meme } from './Four.types';
import { useCallback, useEffect, useState } from 'react';

import { Display } from './Display';
import { Header } from '../4/Header';
import { Interaction } from './Interaction';
import { apiData } from './api-data';

export function Four() {
  const testdata = apiData.data.memes;

  const [memeData, setMemeData] = useState<Meme[]>([]);

  useEffect(() => {
    try {
      (async () => {
        const res = await (await fetch('https://api.imgflip.com/get_memes')).json();
        setMemeData(await res?.data.memes);
      })();
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.warn(err?.message);
      } else {
        console.log('There was an issue fetching the data from the API.');
      }
      setMemeData(testdata);
    }
  }, [testdata]);

  const getRandomMeme = useCallback(() => memeData[Math.floor(Math.random() * memeData.length)], [memeData]);
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

  const setText = useCallback(
    (fieldName: string, newText: string) =>
      setCurrentMeme((prevCurrMeme) => ({
        ...prevCurrMeme,
        [fieldName]: newText,
      })),
    []
  );

  useEffect(() => displayNew(), [displayNew]);

  return (
    <div>
      <Header />
      <Interaction data={currentMeme} getNewMeme={displayNew} setNewText={setText} />
      {currentMeme && <Display data={currentMeme} />}
    </div>
  );
}
