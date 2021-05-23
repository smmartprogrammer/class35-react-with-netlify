import { useRef, useState } from 'react';
import './App.css';

export default function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async () => {
      const response = await fetch(`.netlify/functions/hello`);
      method: "post",
      body:JSON.stringify({name:"hello world"})
      const tempData = await response.json();
      setData(tempData);
    })();
  },[]);
  return (
    <div>
      Hello World!!!
      <div>(data.message)</div>
    </div>
  );
}
