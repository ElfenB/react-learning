import { CSSProperties, useEffect, useState } from 'react';

const style: Record<string, CSSProperties> = {
  component: {
    bottom: '0',
    color: 'gray',
    fontSize: '0.7rem',
    left: '0',
    lineHeight: '0.7rem',
    position: 'absolute',
  },
};

type Props = {
  gameNumber: number;
  gameOver: boolean;
};

export default function Timer({ gameNumber, gameOver }: Props) {
  const [timer, setTimer] = useState(0);
  const [startTime, setStartTime] = useState<number>(Date.now());

  useEffect(() => setStartTime(Date.now()), [gameNumber]);

  useEffect(() => {
    const interval = setInterval(() => setTimer(startTime - Date.now()), 1000);
    if (gameOver) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [startTime, gameOver]);

  return (
    <div style={style.component}>
      <span>{Math.abs(Math.ceil(timer / 1000))}s</span>
    </div>
  );
}
