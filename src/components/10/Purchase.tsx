import { CSSProperties } from 'react';

const style: Record<string, CSSProperties> = {
  checkout: {
    marginTop: '1rem',
    width: '10rem',
  },
};

type Props = {
  handleCheckout: () => void;
};

export function Purchase({ handleCheckout }: Props) {
  return (
    <div>
      <button className="button" style={style.checkout} onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
}
