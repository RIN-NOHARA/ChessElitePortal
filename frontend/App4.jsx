// // App4.jsx
// import React, { useEffect, useState } from 'react';
// // import { HashRouter as Router } from 'react-router-dom';
// import Login from './components/login/login';
// import App from './App';
// import Cookies from 'js-cookie';

// const App4 = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//    useEffect(()=>
//    {
//     const userLoggedIn=Cookies.get("loggedIn")=='true';
//     setIsLoggedIn(userLoggedIn);
//    },[]);
  

//   return (
//     <div>
//       {isLoggedIn ? (
//         <App />
//       ) : 
//         <Login  />
//       }
//     </div>
//   );
// };

// export default App4;
