import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useRouter } from "next/router";
function Footer() {
  const router = useRouter();
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer__left}>
          <div className={styles.footer__left__logo}>Arch X</div>
          <div className={styles.footer__left__links}>
            <div className={styles.footer__left__link}>About</div>
            <div
              className={styles.footer__left__link}
              onClick={() => {
                router.push("/architects");
              }}
              style={{
                cursor: "pointer",
              }}
            >
              Architects
            </div>
            <div className={styles.footer__left__link}>For Teams</div>
          </div>
        </div>
        <div className={styles.footer__right__social}>
          <div className={styles.footer__right__social__link}>
            <FaFacebook />
          </div>
          <div className={styles.footer__right__social__link}>
            <FaTwitter />
          </div>
          <div className={styles.footer__right__social__link}>
            <FaInstagram />
          </div>
        </div>
        <div className={styles.footer__right}>
          <div className={styles.footer__right__links}>
            <div className={styles.footer__right__link}>Terms of Service</div>
            <div className={styles.footer__right__link}>Privacy Policy</div>
            <div className={styles.footer__right__link}>Contact Us</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
