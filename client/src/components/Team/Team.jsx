import React from 'react';
import team from '../../assets/team.jpg';

export default function Team() {
    return (
        <div className='team'>
            <div className='team-flex'>
                <div className='team-flex__img'>
                    <img src={team} alt="team"/>
                </div>
                <div className='team-flex__content'>
                    <h1 id='team'>Our Team</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    )
}
