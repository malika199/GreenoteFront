import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import authService from "../../services/auth.service";
import Logonoir from "../../components/header/Logonoir/Logonoir";
import SubImage from "../../components/layouts/SubImage/SubImage";
import ButtonSubmit from "../../components/UI/ButtonSubmit/ButtonSubmit";
import Input from "../../components/UI/Input/Input";
import TitlePage from "../../components/UI/Title/TitlePage";
import LabelForm from "../../components/UI/labelForm/labelForm";
import styles from "./login.module.scss";
import Link from "next/link";
import Message from "../../components/UI/Message/Message";
import style from "../../../styles/Home.module.css";

const Index = () => {
  const router = useRouter();

  const [error, setError] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    authService
      .login(user)
      .then((data) => {
        console.log(data);

        if (data.message) {
          setError(true);
          setErrorMessage(data.message);
          return;
        }

        localStorage.setItem("token", data.token);
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
      <Logonoir />
      <form
        className={styles.label}
        method="POST"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className={style.label}>
          <LabelForm> Email </LabelForm>
        </div>
        <Input
          type="email"
          label="email"
          id="email"
          name="email"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <div className={style.label}>
          <LabelForm> Password </LabelForm>
        </div>
        <Input
          type="password"
          label="password"
          id="password"
          name="password"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <ButtonSubmit value="Login" />
        {error ? <Message message={errorMessage} type="error" /> : ""}
        <br />
        <br />
        <div className={styles.label2}>
          <label> Create an account ? </label>
          <strong>
            {" "}
            <Link href="/register">
              <a> sign up </a>
            </Link>{" "}
          </strong>
        </div>
        <SubImage />
      </form>
    </div>
  );
};

export default Index;
