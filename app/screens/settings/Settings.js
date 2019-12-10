import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import Loading from '../../components/Loading';
import UserLogged from '../../screens/settings/UserLogged';
import UserGuest from '../../screens/settings/UserGuest';


export default function Settings() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) {
    return (
      <Loading isVisible={true} text="cargando..."/>
    );
  }

  return login ? <UserLogged /> : <UserGuest/>;
}
