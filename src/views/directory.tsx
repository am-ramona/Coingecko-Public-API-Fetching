import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Directory() {
  const [exchanges, setExchanges] = useState([]);

  return (
    <section className='frame'>
      <code className='center green'>CryptoCurrency exchanges on Coingecko</code>
      <code className='italic'>
        Exchanges list&nbsp;
        <span className='yellow'>limited to 10:</span>
      </code>

      <main className='card'>
        <div className='grid'>
          <span className='underline bold'> Name </span>
          <span className='underline bold'> Country </span>
          <span className='underline bold'> Url </span>
          <span className='underline bold'> Logo </span>
          <span className='underline bold'> Trust rank </span>
        </div>
      </main>
    </section>
  );
}
