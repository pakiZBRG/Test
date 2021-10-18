import React from 'react'
import { isAuth } from '../../helpers/auth'

export default function Hero({switchModal}) {
    return (
        <div className='hero' id='home'>
            <div className='hero-img'></div>
            <div className='hero-content'>
                <div className='hero-content__flex'>
                    <h1>GMS</h1>
                    <p>Odit est est explicabo incidunt provident velit sunt sunt.</p>
                </div>
                {!isAuth() ? 
                    <button onClick={switchModal}>Sign up</button>
                        :
                    <button>Welcome {isAuth()}</button>
                }
            </div>
        </div>
    )
}
