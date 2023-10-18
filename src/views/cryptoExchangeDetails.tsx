import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"

export default function CryptoExchangeDetails() {
    const [exchangeDetails, setExchangeDetails] = useState([]);

    const handleClick = () => {
    }


    const handleKeyDown = (event: any) => {
      if(event.key === 'Enter') {
        handleClick();
      }
    }

    return (
        <section className='padding'>
            <code className='center'>Exchange details</code>
            <p> name: </p>
            <p> Country: </p>
            <p> Trust rank: </p>
            <p> Logo:</p>
            <p> Year of establishment:</p>
            <p> Social media links:</p>
            <p> Description:</p>
            <div role="button" tabIndex={0}>Back to main page</div>
        </section>
    )
}