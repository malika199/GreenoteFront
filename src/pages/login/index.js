import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import authService from "../../services/auth.service";
import Logo from "../../components/header/logo/logo";
import SubImage from "../../components/layouts/SubImage/SubImage";
import ButtonSubmit from "../../components/UI/ButtonSubmit/ButtonSubmit";
import Input from "../../components/UI/Input/Input";
import TitlePage from "../../components/UI/Title/TitlePage";

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
      <TitlePage title="Login" />
      <form method="POST" onSubmit={(e) => handleSubmit(e)}>
        <Input
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <Input
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <ButtonSubmit value="sign in" />

        <SubImage />
      </form>
    </div>
  );
};

export default Index;
