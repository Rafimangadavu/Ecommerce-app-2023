import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/AuthStyle.css';
import { useNavigate } from "react-router-dom";
import '../../styles/AuthStyle.css'

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [answer, setAnswer] = useState('');
  
    const navigate = useNavigate();
  
    // form function
     const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post('/api/v1/auth/forgot-password', {
          email,
          newPassword,
          answer,
        });
        
        // if (res & res.data.success) {
        //   toast.success( res.data && res.data.message);
           
                
        // } else { 
        //   toast.error(res.data.message);
          
        // }
        toast.success(res.data.message);
        navigate("/login");
  
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong');
      }
    };

  return (
    <Layout title={'Forgot-Password Ecommerce App'}>
        <div className="form-container" style={{ minHeight: '70vh' }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">RESET PASSWORD</h4>

          <div className="mb-3">
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputAnswer"
              placeholder="Enter Your Favorite Sport Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputNewPassword"
              placeholder="Enter New Password"
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            RESET PASSWORD
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default ForgotPassword