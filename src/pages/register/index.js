import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import authService from "../../services/auth.service";
import Message from '../../components/UI/Message/Message'
import SubImage from "../../components/layouts/SubImage/SubImage";
import ButtonSubmit from "../../components/UI/ButtonSubmit/ButtonSubmit";
import Input from "../../components/UI/Input/Input";
import LabelForm from "../../components/UI/labelForm/labelForm";
import Link from "next/link";
import styles from "./register.module.scss";
<<<<<<< HEAD
import DropdowenMenu from  "../../components/dropdowenmenu/dropdowen"
import Editor from "../../components/Editor";
=======
import Logonoir from '../../components/header/Logonoir/Logonoir';
>>>>>>> 807de504848732ba77577ec70fc4de1bc5f59b8b

const Index = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    authService.register(user)
      .then((data) => {
        console.log(data);
        if (data.message) {
          setError(true);
          setErrorMessage(data.message);
          return false;
        }
        console.log("c est un nouveau user ", data);
     
        router.push("/acceuil");
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setErrorMessage(err.message);
      });
  };

  return (
    <div>
<<<<<<< HEAD
<<<<<<< HEAD
      <form method="POST" onSubmit={(e) => handleSubmit(e)}>
      <Editor />
        
=======
      <Logo />
=======
      <Logonoir/>
>>>>>>> 807de504848732ba77577ec70fc4de1bc5f59b8b
      <form className={styles.label} method="POST" onSubmit={(e) => handleSubmit(e)}>
>>>>>>> origin/main
        <div>
          <label class={styles.label2} > Already have an account ? </label>
          <strong>  <Link href="/login"><a> Login </a></Link> </strong> 
          <br />
          <br />
        </div>
        <LabelForm> username </LabelForm>
        <Input
          type="text"
          label="username"
          id="username"
          name="username"
          required={true}
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
        />

        <LabelForm> email </LabelForm>
        <Input
          type="text"
          label="email"
          id="email"
          name="email"
          required={true}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />


        <LabelForm> password </LabelForm>
        <Input
          type="password"
          label="password"
          id="password"
          name="password"
          autoComplete="off"
          required={true}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        {error && <span>{errorMessage}</span>}
        <ButtonSubmit value="Register"/>

        

      </form>
    </div>
  );
};

export default Index;
