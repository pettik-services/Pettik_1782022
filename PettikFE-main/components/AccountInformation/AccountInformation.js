import styles from "./AccountInformation.module.scss";
import Image from "next/image";
import AccountInfoImage from "../../public/PAW BACKGROUND.jpg";
import axios from "axios";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useSnackbar } from "notistack";



const AccountInformation = ({userData,setIsEditProfile}) => {
 
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    username: userData?.name,
    email: userData?.email,
    phoneNumber: userData?.phoneNumber,
  });
 

  const [loading, setLoding] = useState(false);
  const handelInput = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setFormData((prevValue) => ({ ...prevValue, [key]: value }));
  };

  const register = async (formData) => {
    if (!validateInput(formData)) return;

setIsEditProfile(false);
const data = {
  "username": formData.username,
    "email": formData.email,
};
    try {
      setLoding(true);
      await axios.post('https://6u26pb8q2e.execute-api.us-east-1.amazonaws.com/user/details/store',{
        body : JSON.stringify(data),
          headers: { 
            'Content-Type': 'application/json'
           },
      }).then((response)=>console.log(response));
      // let data = JSON.stringify({
      //   "username": formData.username,
      //   "email": formData.email,
      // });
      
      // var config = {
      //   method: 'post',
      //   url: 'https://6u26pb8q2e.execute-api.us-east-1.amazonaws.com/user/details/store',
      //   headers: { 
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Origin' : 'http://localhost:3000'
      //   },
      //     data : data
       
      // };
      // console.log(config,"cofigdata");
      //  await axios(config)
      // .then(function (response) {
      //   console.log(JSON.stringify(response.data,"hey"));
      // })
      setLoding(false);
      enqueueSnackbar("Submited Successfully", { variant: "success" });
     
    } catch (e) {
      setLoding(false);
      if (e.response && e.response.status === 400) {
        enqueueSnackbar(e.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar("Somthing went wrong. Server error ...", {
          variant: "error",
        });
      }
    }
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
    // if (!data.phoneNumber) {
    //   enqueueSnackbar("Phone Number is a required field", { variant: "error" });
    //   return false;
    // }
    // if (data.phoneNumber.length < 10) {
    //   enqueueSnackbar("Phone Number must be at least 10 numbers", {
    //     variant: "error",
    //   });
    //   return false;
    // }
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
            name="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handelInput}
          />
          <input
            name="phoneNumber"
            type="text"
            placeholder="Phone number"
            disabled="disabled"
            value={"9971161976"}
            onChange={handelInput}
            className={styles.disabledBtn}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handelInput}
          />
          {loading ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          ) : (
            <button
              type="submit"
              className={styles.accountInformationSaveButton}
              onClick={() => register(formData)}
            >
              SAVE
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
