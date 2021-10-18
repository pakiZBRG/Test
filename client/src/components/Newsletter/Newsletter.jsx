import React from 'react'

export default function Newsletter() {
    return (
        <div className='newsletter'>
            <div className='newsletter-img'></div>
            <div className='newsletter-content'>
                <h1 id='newsletter'>Sign up for our Newsletter</h1>
                <div className='newsletter-content__form'>
                    <input type='text' placeholder='Email@email.com'/>
                    <button>Read more</button>
                </div>
            </div>
        </div>
    )
}
