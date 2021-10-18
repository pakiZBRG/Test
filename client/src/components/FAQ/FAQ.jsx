import React from 'react'
import faq from '../../assets/faq.jpg';

export default function FAQ() {
    return (
        <div className='faq' id='faq'>
            <div className='faq-flex'>
                <div className='faq-flex__content'>
                    <h1>FAQ</h1>
                    <ul>
                        <li>How much money i need to start?</li>
                        <li>How to pay?</li>
                        <li>How much money i need to start?</li>
                        <li>How much money i need to start?</li>
                        <li>How much money i need to start?</li>
                        <li>How much money i need to start?</li>
                    </ul>
                    <button>View more</button>
                </div>
                <div className='faq-flex__img'>
                    <img src={faq} alt="faq"/>
                </div>
            </div>
        </div>
    )
}
