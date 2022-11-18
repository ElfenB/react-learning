import { CSSProperties } from 'react';

const style: Record<string, CSSProperties> = {
  text: {
    textAlign: 'center',
  },
};

export function ProductError() {
  return (
    <div>
      <h1 style={style.text}>Product not found, does it exist?</h1>
    </div>
  );
}
