import React from 'react'

export default function RegisterForm({createAccount, userData, handleChange, switchLogin}) {
    return (
        <React.Fragment>
            <h2>Create an account</h2>
            <form method='POST' onSubmit={createAccount}>
                <div className='form_control'>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name='username'
                        autoComplete='off'
                        value={userData.username}
                        onChange={handleChange('username')}
                    />
                </div>
                <div className='form_control'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name='email'
                        autoComplete='off'
                        value={userData.email}
                        onChange={handleChange('email')}
                    />
                </div>
                <div className='form_control'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name='password'
                        value={userData.password}
                        onChange={handleChange('password')}
                    />
                </div>
                <input type="submit" value='Register'/>
                <span className='modal-switch' onClick={switchLogin}>Have an account?</span>
            </form>
        </React.Fragment>
    )
}
