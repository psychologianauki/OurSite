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
          <Link
            href={routes.DEFAULT}
            style={{ width: "100%", textAlign: "center" }}
          >
            <div
              style={{ color: "black", fontSize: "1.8rem" }}
              className={styles.logo}
              onClick={() => {
                setSection(0)
              }}
            >
              Logo
            </div>
          </Link>
          <Link href={routes.START} style={{ width: "100%" }}>
            <div
              className={`${styles.sectionElem} ${
                section === 1 ? "active" : ""
              }`}
              onClick={() => {
                setSection(1)
              }}
              style={{
                backgroundColor: section === 1 ? "black" : "white",
                color: section === 1 ? "white" : "black",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Start
            </div>
          </Link>
          <Link href={routes.OFFER} style={{ width: "100%" }}>
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
              Offer
            </div>
          </Link>
          <Link href={routes.ABOUTUS} style={{ width: "100%" }}>
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
              About us
            </div>
          </Link>
          <Link href={routes.LECTURES} style={{ width: "100%" }}>
            <div
              className={styles.sectionElem}
              onClick={() => {
                setSection(8)
              }}
              style={{
                backgroundColor: section === 8 ? "black" : "white",
                color: section === 8 ? "white" : "black",
                cursor: "pointer",
              }}
            >
              Lectures
            </div>
          </Link>
          <Link href={routes.CONTACTUS} style={{ width: "100%" }}>
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
              Contact
            </div>
          </Link>

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
            <Phone fill="black" />
            <div className={styles.contactDetail}>
              <a href="tel:123456789">123456789</a>
            </div>
          </div>
          <div className={styles.iconEmail}>
            <Email fill="black" />
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
              justifyContent: "flex-end",
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
                <Phone fill="black" />
              </div>
              <div className={styles.iconEmail}>
                <Email fill="black" />
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
