import Login from "./Login";
import Logout from "./Logout";
import { auth } from "../firebaseConfig";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  return (
    <>
      <h1>Autenticação com Firebase</h1>
      {user ? <Logout user={user} /> : <Login />}
    </>
  );
}

export default App;
