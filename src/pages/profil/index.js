import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import authService from "../../services/auth.service";
import Message from '../../components/UI/Message/Message'
import ButtonSubmit from "../../components/UI/ButtonSubmit/ButtonSubmit";
import Input from "../../components/UI/Input/Input";
import LabelForm from "../../components/UI/labelForm/labelForm";
import withAuth from "../../HOC/withAuth";
import styles from "./profil.module.scss";
import jwt from 'jwt-decode' ;
import MainMenu from '../../components/menu/MainMenu';

const Index = () => {
    const [user, setUser] = useState({});
    const [success, setSuccess] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
      const token = localStorage.getItem("token");
      const decodedToken = jwt(token);
      const userId=decodedToken.id;
      authService.updateUser(token, user)
          .then((data) => {
              console.log(data);
              setSuccess(true);
        })
        .catch((err) => console.log(err));
    };
  
    useEffect(() => {    const token = localStorage.getItem("token")
    const decodedToken = jwt(token);
    const userId=decodedToken.id;
    
      authService.getUser(token, userId).then((data) => {
          setUser(data);
        })
        .catch((err) => console.log(err));
    }, []);
  
    return (
      <div>
          <MainMenu/>
        <form className={styles.profil} method="PUT" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label class={styles.label} > Edit account  </label>
          <br />
          <br />
        </div>
        <LabelForm> username </LabelForm>
          <Input
            label="username"
            type="text"
            id="username"
            name="username"
            value={(user && user.username) || ""}
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
          />
         <LabelForm> email </LabelForm>
          <Input
            label="Email"
            type="text"
            id="email"
            name="email"
            value={(user && user.email) || ""}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />

<LabelForm> password </LabelForm>
          <Input
            label="Password"
            type="text"
            id="password"
            name="password"
            value={(user && user.password) || ""}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
                 <ButtonSubmit value="Edit"/>
                 <ButtonSubmit value="Enregistrer"/>

                {success ? (
                    <Message type="success" message="votre profil a bien été modifié"/>
                ) : ""
              }
        </form>
      </div>
    
  
    );
  };
  
  export default withAuth(Index);