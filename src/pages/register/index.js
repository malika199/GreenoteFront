import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import authService from "../../services/auth.service";
import Message from '../../components/UI/Message/Message'
import Logo from "../../components/header/logo/Logo";
import SubImage from "../../components/layouts/SubImage/SubImage";
import ButtonSubmit from "../../components/UI/ButtonSubmit/ButtonSubmit";
import Input from "../../components/UI/Input/Input";
import TitlePage from "../../components/UI/Title/TitlePage";
import LabelForm from "../../components/UI/labelForm/labelForm";
import Link from "next/link";
import styles from "./register.module.scss";

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
     
        router.push("/login");
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
      <form className={styles.label} method="POST" onSubmit={(e) => handleSubmit(e)}>
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

        <SubImage />
      </form>
    </div>
  );
};

export default Index;
