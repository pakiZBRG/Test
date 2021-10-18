import React from 'react'

export default function LoginForm({ login, userData, handleChange, switchLogin }) {
    return (
        <React.Fragment>
            <h2>Login</h2>
            <form method='POST' onSubmit={login}>
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
                <input type="submit" value='Login'/>
                <span className='modal-switch' onClick={switchLogin}>Don't have an account?</span>
            </form>
        </React.Fragment>
    )
}
