import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider'

const Logout = () => {
    const {loggedOut} = useContext(AuthContext);
    const location = useLocation();
    const Navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    const handleLogout = () => {
      loggedOut().then(() =>{
            alert("SignOut Successfully");
            Navigate(from, { replace: true });
        }).catch((error)=>{
           console.error(error);
        })
    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>Thank You For Visiting Our Website</button>
    </div>
  )
}

export default Logout