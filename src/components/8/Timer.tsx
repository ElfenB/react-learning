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
  publishTime: (time: number) => void;
};

export default function Timer({ gameNumber, gameOver, publishTime }: Props) {
  const [timer, setTimer] = useState(0);
  const [startTime, setStartTime] = useState<number>(Date.now());

  useEffect(() => setStartTime(Date.now()), [gameNumber]);

  useEffect(() => publishTime(timer), [publishTime, timer]);

  useEffect(() => {
    const interval = setInterval(() => setTimer(Math.ceil((Date.now() - startTime) / 1000) - 1), 1000);
    if (gameOver) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [startTime, gameOver, timer]);

  return (
    <div style={style.component}>
      <span>{timer}s</span>
    </div>
  );
}
