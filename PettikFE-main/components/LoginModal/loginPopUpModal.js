import { Modal } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import styles from "./loginModal.module.scss";
import LoginImage from "../../public/loginModalImage.jpeg";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useState,useEffect } from "react";

export const LoginPopUpModal = ({ loginModal, setLoginModal }) => {
  const [mobileNumber, setMobileNumber] = React.useState();
  const [isvalidMobileNumber, setIsvalidMobileNumber] = React.useState(false);
  const [isOtpAvailable, setIsOtpAvailable] = React.useState(false);
  const [phone, setPhone] = React.useState();
  const mobileNumberRegex = /^[6-9]\d{9}$/;
  const [step, setStep] = React.useState(1);
  

  const [otp1, setOtp1] = useState();
  const [otp2, setOtp2] = useState();
  const [otp3, setOtp3] = useState();
  const [otp4, setOtp4] = useState();
  const [otpValue, setOtpValue] = useState();

  const handleOtpSubmit =()=>{
    const combinedOtp = (otp1+otp2+otp3+otp4).toString();
  }
   const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {

        elmnt.target.form.elements[next].focus()
      }
    }
    else {
      console.log("next");
     
        const next = elmnt.target.tabIndex;
        if (next < 4) {
          elmnt.target.form.elements[next].focus()
        }
    }

  }
  const handleChange = (set,e) => {
    set(e.target.value)
  }

  const handleMobileNumberInput = (e) => {
    setMobileNumber(e.target.value);
    if (mobileNumberRegex.test(e.target.value)) {
      setPhone(e.target.value);
      setIsvalidMobileNumber(true);
    } else {
      setIsvalidMobileNumber(false);
    }
  };

  const loginApi = async () => {
    setStep(2);
var data = JSON.stringify({
  "phone": "9971161976"
});

var config = {
  method: 'post',
  url: 'https://6u26pb8q2e.execute-api.us-east-1.amazonaws.com/generate',
  headers: { 
    'Content-Type': 'application/json',
  },
  data : data,
  mode : 'cors'
};
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
//     let payload = {
//       "phone":phone,
//     };
// console.log(JSON.stringify(payload),"hey");
// console.log(phone,"hey");
//     await axios({
//       url: "https://6u26pb8q2e.execute-api.us-east-1.amazonaws.com/generate",
//       method: "POST",
//       data: JSON.stringify(payload),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
      // await axios
      //   .post(
      //     "https://6u26pb8q2e.execute-api.us-east-1.amazonaws.com/generate",
      //     { phone },
      //     {
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     }
      //   )
      // .then(function (resp) {
      //   console.log(resp);
      // })
      // .catch(() => {
      //   console.log("Error while sending otp");
      // });
  };
  useEffect(() => {
    if(otp1 && otp2 && otp3&&otp4){
      setIsOtpAvailable(true);
    }
    else{
      setIsOtpAvailable(false);
    }
  },[otp1,otp2,otp3,otp4])

  return (
    <>
      <Modal
        open={loginModal}
        disableAutoFocus={true}
        BackdropProps={{ style: { background: "grey", opacity: 0.55 } }}
        onClose={() => {
          setLoginModal(false);
        }}
      >
        {step === 1 ? (
          <div className={styles.loginContainer}>
            <Image
              src={LoginImage}
              alt={"login-image"}
              height={230}
              width={100}
              placeholder="blur"
            />
            <div className={styles.mobileNumberInputContainer}>
              <div className={styles.countryCode}>+91</div>
              <span className={styles.pipe}>|</span>
              <div className={styles.numberInput}>
                <TextField
                  type="number"
                  value={mobileNumber}
                  sx={{ width: 215 }}
                  onChange={handleMobileNumberInput}
                  placeholder={"Enter Your Mobile Number"}
                  variant="standard"
                  // type="tel"
                  InputProps={{
                    disableUnderline: true,
                  }}
                ></TextField>
              </div>
            </div>
            <div
              className={
                isvalidMobileNumber
                  ? styles.continueButton
                  : styles.continueButtonDisabled
              }
              onClick={() => {
                isvalidMobileNumber && loginApi();
              }}
            >
              Continue
            </div>
            <div className={styles.termAndCondition}>
              By continuing, i agree to the{" "}
              <span className={styles.termAndConditionSpan}>Term Of Uses</span>{" "}
              and{" "}
              <span className={styles.termAndConditionSpan}>
                Privacy & Cookie Policy
              </span>
            </div>
          </div>
        ) : (
          <div className={styles.loginOtpContainer}>
            <div className={styles.otpHelpText}>Enter OTP</div>
            <form >
              <div className={styles.otpContainer}>
                <input
                  name="otp1"
                  type="text"
                  autoComplete="off"
                  className={styles.otpInput}
                  value={otp1}
                  // onKeyPress={(e)=>{console.log(e)}}
                  onChange={e => handleChange(setOtp1, e)}
                  tabIndex="1" maxLength="1" onKeyUp={(e) => inputfocus(e)}
                />
                <input
                  name="otp2"
                  type="text"
                  autoComplete="off"
                  className={styles.otpInput}
                  value={otp2}
                  onChange={e => handleChange(setOtp2, e)}
                  tabIndex="2" maxLength="1" onKeyUp={e => inputfocus(e)}
                />
                <input
                  name="otp3"
                  type="text"
                  autoComplete="off"
                  className={styles.otpInput}
                  value={otp3}
                  onChange={e => handleChange(setOtp3, e)}
                  tabIndex="3" maxLength="1" onKeyUp={e => inputfocus(e)}
                />
                <input
                  name="otp4"
                  type="text"
                  autoComplete="off"
                  className={styles.otpInput}
                  value={otp4}
                  onChange={e => handleChange(setOtp4, e)}
                  tabIndex="4" maxLength="1" onKeyUp={e => inputfocus(e)}
                />
              </div>
              <div className={styles.verificationText}>A Verification code has been send via SMS to</div>
              <div className={styles.verificationPhnNumber}>+91&nbsp;{phone}</div>
              <div className={isOtpAvailable?styles.primary:styles.inActive} type="submit" onClick={()=>{
                isOtpAvailable && handleOtpSubmit()
              }}>
         CONTINUE
        </div>
        <div className={styles.resendOtp}>Did not recieve the OTP? &nbsp;<span className={styles.underline}>Resend the OTP</span></div>
            </form>
          </div>
        )}
      </Modal>
    </>
  );
};
