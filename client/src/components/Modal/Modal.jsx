import React, {useState} from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function Modal({switchModal, handleChange, createAccount, userData, login}) {
    const [changeMod, setChangeMod] = useState(false);

    // Change between create account and login form
    const switchLogin = () => setChangeMod(!changeMod);

    return (
        <div className='modal'>
            <div onClick={switchModal} className='modal-close'>&times;</div>
            {!changeMod ?
                <RegisterForm 
                    createAccount={createAccount}
                    userData={userData}
                    handleChange={handleChange}
                    switchLogin={switchLogin}
                />
                    :
                <LoginForm
                    login={login}
                    userData={userData}
                    handleChange={handleChange}
                    switchLogin={switchLogin}
                />
            }
            
        </div>
    )
}
