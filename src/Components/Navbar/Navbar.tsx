import React from "react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import Phone from "@/icons/Phone";
import Email from "@/icons/Email";

export default function Navbar() {
  const [section, setSection] = useState<number>(-1);

  return (
    <div className={styles.container}>
      <div className={styles.webNav}>
        <div className={styles.insideWeb}>
          <div
            style={{ color: "black", fontSize: "1.8rem" }}
            className={styles.logo}
            onClick={() => {
              setSection(0);
            }}
          >
            Logo
          </div>
          <div
            className={`${styles.sectionElem} ${section === 1 ? "active" : ""}`}
            onClick={() => {
              setSection(1);
            }}
            style={{
              backgroundColor: section === 1 ? "black" : "white",
              color: section === 1 ? "white" : "black",
            }}
          >
            Start
          </div>
          <div
            className={styles.sectionElem}
            onClick={() => {
              setSection(2);
            }}
            style={{
              backgroundColor: section === 2 ? "black" : "white",
              color: section === 2 ? "white" : "black",
            }}
          >
            Oferta
          </div>
          <div
            className={styles.sectionElem}
            onClick={() => {
              setSection(3);
            }}
            style={{
              backgroundColor: section === 3 ? "black" : "white",
              color: section === 3 ? "white" : "black",
            }}
          >
            Portfolio
          </div>
          <div
            className={styles.sectionElem}
            onClick={() => {
              setSection(4);
            }}
            style={{
              backgroundColor: section === 4 ? "black" : "white",
              color: section === 4 ? "white" : "black",
            }}
          >
            O nas
          </div>
          <div
            className={styles.sectionElem}
            onClick={() => {
              setSection(5);
            }}
            style={{
              backgroundColor: section === 5 ? "black" : "white",
              color: section === 5 ? "white" : "black",
            }}
          >
            Kontakt
          </div>
          <div className={styles.iconPhone}>
            <Phone fill="white" />
            <div className={styles.contactDetail}>
              <a href="tel:123456789">123456789</a>
            </div>
          </div>
          <div className={styles.iconEmail}>
            <Email fill="white" />
            <div className={styles.contactDetail}>
              <a href="mailto:email@gmail.com">email@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mobileNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
