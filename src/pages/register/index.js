import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import authService from "../../services/auth.service";

import Logo from "../../components/header/logo/logo";
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
    authService
      .register(user)
      .then((data) => {
        console.log(data);
        if (data.message) {
          setError(true);
          setErrorMessage(data.message);
          return false;
        }
        console.log("c est un nouveau user ", data);
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
      <form method="POST" onSubmit={(e) => handleSubmit(e)}>
        <Logo />
        <div>
          <label class={styles.label} > Already have an account ? </label>

          <strong>  <Link href="/login"><a> Login </a></Link> </strong> 
          <br />
          <br />
        </div>
        <LabelForm> username </LabelForm>
        <Input
          type="text"
          required={true}
          onChange={(e) => {
            setUser({ ...user, nom: e.target.value });
          }}
        />

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
          autoComplete="off"
          required={true}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <ButtonSubmit value="submit" />

        <SubImage />
      </form>
    </div>
  );
};

export default Index;
