import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Button from "@mui/material/Button";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerRow1}>
        <div className={styles.coupon}>
          Extra 15% off on 1st order over ₹400 with code&nbsp;
          <span className={styles.code}>PETTIKFIRST 1</span>
        </div>
        <div className={styles.customerSupport}>
          Customer Support:&nbsp;&nbsp;&nbsp;
          <span className={styles.icon}>
            <SupportAgentIcon sx={{ fontSize: 30, verticalAlign: "middle" }} />
          </span>
        </div>
      </div>
      <div className={styles.headerRow2}>
        <div className={styles.pettikLogo}>
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="pettik-logo"
              height={130}
              width={130}
            />
          </Link>
        </div>
        <div className={styles.navigation}>
          <ul>
            <li>Home</li>
            <li>Pet Services</li>
            <li>Consult a vet</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={styles.button}>
          <Button className="buttonLocationSignin">
            LOCATION &nbsp;&nbsp;{" "}
            <span>
              <ArrowRightAltIcon
                sx={{ fontSize: 30, verticalAlign: "middle" }}
              />
            </span>
          </Button>
          <Button className="buttonLocationSignin" sx={{color:"#281ACB",background:"#F9F8F8", fontweight:700}}>
            SIGN IN &nbsp;&nbsp;
            <span>
              <ArrowRightAltIcon
                sx={{ fontSize: 30, verticalAlign: "middle" }}
              />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Header;
