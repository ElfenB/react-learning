import './App.css';

import { Five } from './components/5/Five';
import { Four } from './components/4/Four';
import { One } from './components/1/One';
import Six from './components/6/Six';
import { Three } from './components/3/Three';
import { Two } from './components/2/Two';

function App() {
  // eslint-disable-next-line prefer-const
  let show = 6;

  return (
    <div>
      {show === 1 && <One />}

      {show === 2 && <Two />}

      {show === 3 && <Three />}

      {show === 4 && <Four />}

      {show === 5 && <Five />}

      {show === 6 && <Six />}
    </div>
  );
}

export default App;
