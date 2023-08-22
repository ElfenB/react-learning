import './4.scss';

import { useCallback, useEffect, useState } from 'react';

import { Header } from '../4/Header';
import { apiData } from './api-data';
import { Display } from './Display';
import { CurrentMeme, Meme } from './Four.types';
import { Interaction } from './Interaction';

export function Four() {
  const testdata = apiData.data.memes;

  const [memeData, setMemeData] = useState<Meme[]>([]);

  useEffect(() => {
    async function getMemes() {
      const res: unknown = await (await fetch('https://api.imgflip.com/get_memes')).json();
      if (res instanceof Error) {
        console.warn(res?.message);
      }
      if (
        typeof res === 'object' &&
        res &&
        'data' in res &&
        typeof res?.data === 'object' &&
        res?.data &&
        'memes' in res.data &&
        typeof res?.data?.memes === 'object' &&
        res?.data?.memes
      ) {
        setMemeData(res?.data.memes as Meme[]);
      }
    }
    getMemes().catch((err) => console.warn(err));
    setMemeData(testdata);
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
    [getRandomMeme],
  );

  const setText = useCallback(
    (fieldName: string, newText: string) =>
      setCurrentMeme((prevCurrMeme) => ({
        ...prevCurrMeme,
        [fieldName]: newText,
      })),
    [],
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
