import { decrement, increment, incrementByAmount, reset, setAmount } from '../redux/features/counter/counter';
import { useDispatch, useSelector } from 'react-redux';

import { ChangeEvent } from 'react';
import { RootState } from '../redux/store';

export function Nine() {
  const { count, amount } = useSelector((state: RootState) => state.counterState);
  const dispatch = useDispatch();

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(setAmount(Number(e.target.value)));

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      <input id="amount" name="amount" type="number" value={amount} onChange={handleAmountChange} />
      <button onClick={() => dispatch(incrementByAmount())}>Increment by amount</button>
    </div>
  );
}
