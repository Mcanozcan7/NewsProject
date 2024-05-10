import React from 'react';
import { useNavigate } from 'react-router-dom'

import  secureLocalStorage  from  "react-secure-storage";

function Logout() {

    const navigate = useNavigate()

    const logoutRequest = async () => {
        try {
            secureLocalStorage.removeItem("Token")
            navigate("/")

            return await response.json();
        } catch (error) {
            console.log(error);
            throw error;
        }

        

        
    };
      

  return (
    <div>
        <button onClick={logoutRequest}>Logout</button>
    </div>
  )
};

export default Logout;
