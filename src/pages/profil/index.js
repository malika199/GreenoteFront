import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Message from "../../components/UI/Message/Message";
import ButtonSubmit from "../../components/UI/ButtonSubmit/ButtonSubmit";
import Input from "../../components/UI/Input/Input";
import LabelForm from "../../components/UI/labelForm/labelForm";
import withAuth from "../../HOC/withAuth";
import styles from "./profil.module.scss";
import jwt from "jwt-decode";
import MainMenu from "../../components/menu/MainMenu";
import authService from "../../services/auth.service";
import { AiFillCamera } from "react-icons/ai";

const Index = () => {
  const [user, setUser] = useState({});
  const [isReadonly, setIsReadonly] = useState(true);
  const [success, setSuccess] = useState(false);

  const [selectImage, setSelectedFile] = useState();
  const [isLoading, setisLoading] = useState(false);

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  console.log(selectImage);

  const handleSubmitImage = (e) => {
    if (selectImage) {
      e.preventDefault();
      const data = new FormData();
      data.append("file", selectImage);
      data.append("upload_preset", "ymp6ekgg");
      data.append("cloud_name", "doieuxngb");
      setisLoading(true);
      fetch("https://api.cloudinary.com/v1_1/doieuxngb/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => handleSubmit(data.secure_url))
        .catch((err) => console.log(err));
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = (url) => {
    if (isReadonly) {
      setIsReadonly(!isReadonly);
    } else {
      // e.preventDefault();
      const token = localStorage.getItem("token");
      authService
        .updateUser(token, { ...user, profilPecture: url })
        .then((data) => {
          setSuccess(true);
          setUser(data.user);
        })
        .catch((err) => console.log(err));
      setIsReadonly(!isReadonly);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    authService
      .getUser(token)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt(token);
    const userId = decodedToken.id;

    authService
      .getUser(token, userId)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <MainMenu />

      <div className={styles.cnt}>
        <div className={isReadonly ? styles.profil : styles.wrapper}>
          <h1> Edit account </h1>
          <div className={styles.cnt}>
            <div className={styles.profile_pic}>
              {isReadonly === false ? (
                <>
                  <label className={styles.l_label} for="file">
                    <span className={styles.span}>
                      {" "}
                      <i className={styles.icon}>
                        <AiFillCamera />
                      </i>{" "}
                      {"  "} Change Image
                    </span>
                  </label>

                  <input
                    className={styles.input}
                    id="file"
                    type="file"
                    onChange={handleChange}
                    accept=".jpg, .png, jpeg"
                  ></input>
                </>
              ) : (
                <></>
              )}
              <img
                className={isReadonly ? styles.img1 : styles.img}
                src={(user && user.profilPecture) != null ? (user && user.profilPecture) : 'https://www.super-blagues.fr/assets/images/profil/profil_defaut.png'}
              />
            </div>

            <div className={styles.col6}></div>
          </div>
          <div className={styles.cnt}>
            <div className={styles.container}>
              <div className={styles.col4}>
                <LabelForm> username </LabelForm>
              </div>

              <div className={styles.col6}>
                <Input
                  readOnly={isReadonly}
                  label="USERNAME"
                  type="text"
                  id="username"
                  name="username"
                  value={(user && user.username) || ""}
                  onChange={(e) => {
                    setUser({ ...user, username: e.target.value });
                  }}
                />
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.col4}>
                <LabelForm> email </LabelForm>
              </div>

              <div className={styles.col6}>
                <Input
                  readOnly={isReadonly}
                  label="Email"
                  type="text"
                  id="email"
                  name="email"
                  value={(user && user.email) || ""}
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                />
              </div>
            </div>

            {isReadonly === false ? (
              <div className={styles.container}>
                <div className={styles.col4}>
                  <LabelForm> Nouveau mot de passe </LabelForm>
                </div>
                <div className={styles.col6}>
                  <Input
                    readOnly={isReadonly}
                    label="Mot de passe"
                    type="password"
                    id="password"
                    required={true}
                    name="password"
                    placeholder="Nouveau mot de passe"
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                    }}
                  />
                </div>
              </div>
            ) : (
              <></>
            )}

            <div className={styles.container}>
              <div className={styles.colB}>
                <input
                  className={styles.buttonSubmit}
                  type="button"
                  value="modifer mon profile"
                  onClick={(e) => handleSubmitImage(e)}
                />
              </div>
              {isReadonly === false ? (
                <div className={styles.col4}>
                  <input
                    onClick={(e) => setIsReadonly(!isReadonly)}
                    className={styles.buttonReset}
                    type="reset"
                    value="annuler"
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          {success ? (
            <Message type="success" message="votre profil a bien été modifié" />
          ) : (
            ""
          )}{" "}
        </div>
      </div>
    </>
  );
};

export default withAuth(Index);
