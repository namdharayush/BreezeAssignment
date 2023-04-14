import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth} from './Fire'
import { useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast'

const Home = () => {
  const [authUser, setAuthUser] = useState(null);
  const history = useNavigate()

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        history('/')
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
      toast.success('User signed out')
  };

  return (
    <div>
        <p>Hello World</p>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut} type="button">Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default Home;