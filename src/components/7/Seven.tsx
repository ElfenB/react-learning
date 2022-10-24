import { useEffect, useState } from 'react';

export default function Seven() {
  const [apiData, setApiData] = useState({});
  const [count, setCount] = useState(1);

  console.info('Seven rendered');

  const IncreaseCount = () => setCount((prevCount) => ++prevCount);

  useEffect(() => {
    console.info('Effect ran');

    fetch('https://swapi.dev/api/people/' + count)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [count]);

  return (
    <div>
      <h1>Seven works!</h1>
      
      <p>Current character: {count}</p>
      <button onClick={IncreaseCount}>Get next character</button>

      <pre>{JSON.stringify(apiData)}</pre>
    </div>
  );
}
