import { useState } from 'react';
import AppRouter from './Router';
import { firebaseInstance } from '../firebaseInfo';
import { dbService } from '../firebaseInfo';

function App() {

  // firebase value test code
  console.log(firebaseInstance);

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>&copy; {new Date().getFullYear()} Firebase Test </footer>
    </>
  );
}

export default App;