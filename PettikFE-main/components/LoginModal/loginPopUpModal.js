import { Modal } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import styles from "./loginModal.module.scss";
import LoginImage from "../../public/loginModalImage.jpeg";
import { TextField } from "@mui/material";

export const LoginPopUpModal = ({ loginModal, setLoginModal }) => {
  const [mobileNumber, setMobileNumber] = React.useState();
  const handleMobileNumberInput = (e) => {
    console.log(e.target.value);
  };
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
                InputProps={{
                  disableUnderline: true,
                }}
              ></TextField>
            </div>
          </div>
          <div className={styles.continueButton}>Continue</div>
          <div className={styles.termAndCondition}>
            By continuing, i agree to the{" "}
            <span className={styles.termAndConditionSpan}>Term Of Uses</span>{" "}
            and{" "}
            <span className={styles.termAndConditionSpan}>
              Privacy & Cookie Policy
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
};
