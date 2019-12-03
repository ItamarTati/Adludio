import React from 'react';
import './App.css';
import Logo from './MerlinTask/asset3.png'



function App() {
  const width = {width: '50px'}

  return (
    
    <div className="App">
      <div className="signupform">
        <div className="signupform-image">
          <h1>Redefining Mobile Advertising</h1>
          <p>Please use this to register. If you are a member, please login.</p>
        </div>
        <form className="signupform-box">
        <div className='register'>
          <img className='image' src={Logo} alt='Logo'/>
            <h1>Register</h1>
            
            <p>Full Name</p>
            <div className="txtb">
              
          <input type="text"
          />
          
            </div>
            <p style={width}>E-mail</p>
            <div className="txtb">
              
          <input type="text"
          />
          
            </div>
            <p>Password</p>
            <div className="txtb">
              
          <input type="text"
          />
            </div>
            <button className='button'>Register</button>
            <div className="google-btn">
  <div className="google-icon-wrapper">
    <img className="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt ='google btn'/>
  </div>
  <h2 class="btn-text"><b>Sign in with Google</b></h2>
</div>



          </div>
          
        
        
        </form>
        

      </div>


    </div>
  );
}

export default App;
