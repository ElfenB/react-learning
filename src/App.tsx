import './App.css';

import { Five } from './components/5/Five';
import { Four } from './components/4/Four';
import { One } from './components/1/One';
import { Three } from './components/3/Three';
import { Two } from './components/2/Two';

function App() {
  // eslint-disable-next-line prefer-const
  let show = 5;

  return (
    <div>
      {show === 1 && <One />}

      {show === 2 && <Two />}

      {show === 3 && <Three />}

      {show === 4 && <Four />}

      {show === 5 && <Five />}
    </div>
  );
}

export default App;
