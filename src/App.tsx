import './App.css';

import { Five } from './components/5/Five';
import { Four } from './components/4/Four';
import { One } from './components/1/One';
import { Three } from './components/3/Three';
import { Two } from './components/2/Two';

function App() {
  return (
    <div>
      {false && <One />}

      {false && <Two />}

      {false && <Three />}

      {false && <Four />}

      {true && <Five />}
    </div>
  );
}

export default App;
