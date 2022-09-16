import styles from "./AccountInformation.module.scss";
import Image from "next/image";
import AccountInfoImage from "../../public/PAW BACKGROUND.jpg";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useState } from "react";

const AccountInformation = () => {
  // const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
  });

  const handelInput = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setFormData((prevValue) => ({ ...prevValue, [key]: value }));
  };

  const validateInput = (data) => {
    if (!data.username) {
      enqueueSnackbar("Username is a required field", { variant: "error" });
      return false;
    }
    if (data.username.length < 3) {
      enqueueSnackbar("Username must be at least 3 characters", {
        variant: "error",
      });
      return false;
    }
    if (!data.phoneNumber) {
      enqueueSnackbar("Phone Number is a required field", { variant: "error" });
      return false;
    }
    if (data.phoneNumber.length < 10) {
      enqueueSnackbar("Phone Number must be at least 10 numbers", {
        variant: "error",
      });
      return false;
    }
    if (!data.email) {
      enqueueSnackbar("Email is a required field", { variant: "error" });
      return false;
    }

    return true;
  };
  return (
    <div>
      <div className={styles.accountInformationContainer}>
        <div className={styles.accountInformationBackgroundImage}>
          <Image src={AccountInfoImage} alt="banner" layout="responsive" />
        </div>
        <div className={styles.accountInformationBox}>
          <div className={styles.accountInformationBoxHeading}>
            ACCOUNT INFORMATION
          </div>
          <input
            id="username"
            type="text"
            placeholder="Username"
           
            value={formData.username}
            onChange={handelInput}
            name="username"
          />
          <input
            id="phoneNumber"
            type="text"
            placeholder="Phone number"
            
            value={"9971161976"}
            onChange={handelInput}
            name="phoneNumber"
          />
          <input
            type="gmail"
            name="email"
           
            placeholder="Enter your email"
            value={formData.email}
            onChange={handelInput}
          />
          <button type="submit" className={styles.accountInformationSaveButton} onClick={()=>register(formData)}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
