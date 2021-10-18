import React, {useState} from 'react';
import { Main } from './components/Main.jsx';
import Modal from './components/Modal/Modal.jsx';
import { Nav } from './components/Nav/Nav.jsx';
import { authenticate } from './helpers/auth';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [modal, setModal] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  })
  
  // Open/close modal
  const switchModal = () => setModal(!modal);

  // Save user input
  const handleChange = text => e => setUserData({...userData, [text]: e.target.value.trim()});
  const { username, email, password } = userData;

  const createAccount = e => {
    e.preventDefault();
    if(username && email && password) {
      axios.post('/users/register', {username, email, password})
        .then(res => {
            setUserData({
                ...userData,
                username: "",
                email: "",
                password: ""
            })
            toast.success(res.data.message);
        })
        .catch(err => toast.error(err.response.data.error))
    } else {
      toast.error("Fill in all the fields");
    }
  }

  const login = e => {
    e.preventDefault();
    if(email && password) {
      axios.post('/users/login', {email, password})
        .then(res => {
          authenticate(res, () => {
            setUserData({
              ...userData,
              email: "",
              password: ""
            })
            toast.success(res.data.message);
            // Close modal
            switchModal();
          });
        })
        .catch(err => toast.error(err.response.data.error))
    } else {
      toast.error("Fill in all the fields");
    }
  }

  return (
    <div className='container'>
      {modal && <div className='overlay'></div>}
      <Nav switchModal={switchModal}/>
      <Main switchModal={switchModal}/>
      <ToastContainer/>
      { modal && 
        <Modal 
          switchModal={switchModal}
          handleChange={handleChange}
          createAccount={createAccount}
          userData={userData}
          login={login}
        />
      }
    </div>
  );
}

export default App;
