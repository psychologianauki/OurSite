import React from "react";
import styles from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [section, setSection] = useState<number>(-1);

  return (
    <div className={styles.container}>
      <div className={styles.webNav}>
        <div className={styles.insideWeb}>
          <div
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
          <div className={styles.icon}>Telefon</div>
          <div className={styles.icon}>Wiadomosc</div>
        </div>
      </div>

      <div className={styles.mobileNav}>mobileNav</div>
    </div>
  );
}
