import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import authService from "../../services/auth.service";
import Message from "../../components/UI/Message/Message";
import SubImage from "../../components/layouts/SubImage/SubImage";
import ButtonSubmit from "../../components/UI/ButtonSubmit/ButtonSubmit";
import Input from "../../components/UI/Input/Input";
import LabelForm from "../../components/UI/labelForm/labelForm";
import Link from "next/link";
import styles from "./register.module.scss";
import Logonoir from "../../components/header/Logonoir/Logonoir";
import style from "../../../styles/Home.module.css";
const Index = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

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
        <div>
          <label class={styles.label2}> Already have an account ? </label>
          <strong>
            {" "}
            <Link href="/login">
              <a> Login </a>
            </Link>{" "}
          </strong>
          <br />
          <br />
        </div>

        <img src={createObjectURL} />
        <h4>Select Image</h4>
        <input
          type="file"
          onChange={(e) => {
            uploadToClient;
            setUser({ ...user, profilPecture: e.target.value });
          }}
          name="myImage"
        />

        <div className={style.label}>
          {" "}
          <LabelForm> username </LabelForm>
        </div>
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

        <div className={style.label}>
          {" "}
          <LabelForm> email </LabelForm>
        </div>
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

        <div className={style.label}>
          {" "}
          <LabelForm> password </LabelForm>
        </div>
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
        <ButtonSubmit value="Register" />

      </form> 
      <SubImage />
    </div>   

  );
};

export default Index;
