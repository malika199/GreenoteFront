import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import authService from "../../services/auth.service";
import Logo from "../../components/header/logo/logo";
import SubImage from "../../components/layouts/SubImage/SubImage";
import ButtonSubmit from "../../components/UI/ButtonSubmit/ButtonSubmit";
import Input from "../../components/UI/Input/Input";
import TitlePage from "../../components/UI/Title/TitlePage";
import LabelForm from "../../components/UI/labelForm/labelForm";
import styles from "./login.module.scss";
import Link from "next/link";

const Index = () => {
  const router = useRouter();

  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    authService
      .login(user)
      .then((data) => {
        console.log(data);

        console.log(data.message);

        localStorage.setItem("token", data.token);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setErrorMessage(err.message);
      });
  };

  return (
    <div>
      <Logo />
      <form method="POST" onSubmit={(e) => handleSubmit(e)}>

     

      <LabelForm> email </LabelForm>

        <Input
           type="text"
           required={true}

          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        
        <LabelForm> password </LabelForm>
        <Input
          type="password"
          required={true}

          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <ButtonSubmit value="sign in" />
         <br />
         <br />

        <div>
          <label class={styles.label} > Create an account ? </label>

          <strong>  <Link href="/register"><a> sign up </a></Link> </strong> 
         
        </div>

        <SubImage />
      </form>
    </div>
  );
};

export default Index;