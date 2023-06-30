import React from "react"
import styles from "./Navbar.module.css"
import { useState } from "react"
import Phone from "@/icons/Phone"
import Email from "@/icons/Email"
import MenuClose from "@/icons/MenuClose"
import MenuOpen from "@/icons/MenuOpen"
import Link from "next/link"
import { routes } from "@/routes"

export default function Navbar() {
  const [section, setSection] = useState<number>(-1)
  const [mobileNav, setMoobileNav] = useState<boolean>(false)

  return (
    <div className={styles.container}>
      <div className={styles.webNav}>
        <div className={styles.insideWeb}>
          <div
            style={{ color: "black", fontSize: "1.8rem" }}
            className={styles.logo}
            onClick={() => {
              setSection(0)
            }}
          >
            <Link href={routes.START}>Logo</Link>
          </div>
          <div
            className={`${styles.sectionElem} ${section === 1 ? "active" : ""}`}
            onClick={() => {
              setSection(1)
            }}
            style={{
              backgroundColor: section === 1 ? "black" : "white",
              color: section === 1 ? "white" : "black",
              cursor: "pointer",
            }}
          >
            <Link href={routes.START}>Start</Link>
          </div>
          <div
            className={styles.sectionElem}
            onClick={() => {
              setSection(2)
            }}
            style={{
              backgroundColor: section === 2 ? "black" : "white",
              color: section === 2 ? "white" : "black",
              cursor: "pointer",
            }}
          >
            <Link href={routes.OFFER}>Oferta</Link>
          </div>
          <div
            className={styles.sectionElem}
            onClick={() => {
              setSection(4)
            }}
            style={{
              backgroundColor: section === 4 ? "black" : "white",
              color: section === 4 ? "white" : "black",
              cursor: "pointer",
            }}
          >
            <Link href={routes.ABOUTUS}>O nas</Link>
          </div>

          <div
            className={styles.sectionElem}
            onClick={() => {
              setSection(5)
            }}
            style={{
              backgroundColor: section === 5 ? "black" : "white",
              color: section === 5 ? "white" : "black",
              cursor: "pointer",
            }}
          >
            <Link href={routes.CONTACTUS}>Kontakt</Link>
          </div>
          <div
            className={styles.sectionElem}
            onClick={() => {
              setSection(3)
            }}
            style={{
              backgroundColor: section === 3 ? "black" : "white",
              color: section === 3 ? "white" : "black",
              cursor: "pointer",
            }}
          >
            Log In/Register
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
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              color: "black",
              display: "flex",

              alignItems: "center",
              width: "65%",
            }}
          >
            Logo
          </div>
          <div
            style={{
              width: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <div className={styles.iconPhone}>
                <Phone fill="white" />
              </div>
              <div className={styles.iconEmail}>
                <Email fill="white" />
              </div>
            </div>
            <div
              style={{ display: "flex", alignItems: "center" }}
              onClick={() => setMoobileNav(!mobileNav)}
            >
              {mobileNav ? <MenuClose fill="black" /> : <MenuOpen />}
            </div>
          </div>
        </div>
      </div>
      {mobileNav ? (
        <div className={styles.hamburger}>
          <div>
            <ul className={styles.lista}>
              <li className={styles.elem} style={{ fontWeight: "bolder" }}>
                Start
              </li>
              <li className={styles.elem}>Oferta</li>
              <li className={styles.elem}>Portfolio</li>
              <li className={styles.elem}>O nas</li>
              <li className={styles.elem}>Kontakt</li>
            </ul>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  )
}
