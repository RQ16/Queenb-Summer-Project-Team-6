import React, { useContext, useState } from 'react';
import styles from './signup.module.css';




const Signuppages = () => {
 
  const [isLogin, setIsLogin] = useState(true);

 

  // Functions to toggle between login and sign-up
  const showSignUp = () => setIsLogin(false);
  const showLogin = () => setIsLogin(true);

  return (
    <div className={styles.container}>
     

      <div className="container">
        <header>
          <div className="logo">TS</div>
          <div className="login-register">Login / Register</div>
        </header>

        <h2 className={styles.formTitle}>{isLogin ? 'Login' : 'Sign Up'}</h2>

        {isLogin ? (
          <div className={styles.box}>
            <p>Don't have an account? <a href="#" onClick={showSignUp}>Sign Up</a></p>
            <form action="#">
              <input type="email" placeholder="Email" className={styles.input} required />
              <input type="password" placeholder="Password" className={styles.input} required />
              <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
              <button type="submit" className={styles.btn}>Login</button>
            </form>
          </div>
        ) : (
          <div className={styles.box}>
            <form action="#">
              <div className={styles.formGrid}>
                <input type="text" placeholder="First Name" className={styles.input} required />
                <input type="text" placeholder="Surname" className={styles.input} required />
                <input type="email" placeholder="Email" className={styles.input} required />
                <input type="text" placeholder="Phone" className={styles.input} required />
                <input type="password" placeholder="Password" className={styles.input} required />
                <input type="password" placeholder="Verify Password" className={styles.input} required />
              </div>
              <button type="submit" className={styles.btn}>Register</button>
            </form>
            <p>Already have an account? <a href="#" onClick={showLogin}>Login</a></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signuppages;
