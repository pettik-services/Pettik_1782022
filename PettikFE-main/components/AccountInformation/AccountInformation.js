import styles from "./AccountInformation.module.scss";
import Image from "next/image";
import AccountInfoImage from "../../public/PAW BACKGROUND.jpg";

const AccountInformation = () => {
  return (
    <div>
      <div className={styles.accountInformationContainer}>
        <div className={styles.accountInformationBackgroundImage}>
          <Image src={AccountInfoImage} alt="banner" layout="responsive" />
        </div>
        <div className={styles.accountInformationBox}>
          <div className={styles.accountInformationBoxHeading}>ACCOUNT  INFORMATION</div>
          <input type="text" value={"Dinesh Kapri"} name="name" />
          <input type="text" value={"9971161976"} name="phn" />
          <input type="text" value={"kapridinesh99@gmail.com"} name="email" />
          <button type="submit" className={styles.accountInformationSaveButton}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
