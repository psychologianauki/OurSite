import React, { useState } from "react";
import { EmployeeType } from "../../../types";
import styles from "./EmployeeCard.module.css";
import Image from "next/image";
import MouseClick from "../../icons/MouseClick";
import Phone from "@/icons/Phone";
import Email from "@/icons/Email";

export default function EmployeeCard({
  role,
  name,
  email,
  phoneNumber,
  description,
  image,
  onlineStatus,
}: EmployeeType) {
  const [isImageClicked, setIsImageClicked] = useState(false);

  return (
    <div className={styles.cardCont}>
      <div className={styles.roleCont}>{role}</div>
      <div
        onClick={() => setIsImageClicked(!isImageClicked)}
        className={`${styles.imageCardCont} ${
          isImageClicked ? styles.flipped : styles.unflipped
        }`}
      >
        <div className={`${styles.imageCont} `}>
          <Image alt="employeeImage" src={image} fill />
        </div>
        <div className={`${styles.backInformationCont}`}>
          <div className={styles.infomrationAndIcon}>
            <Email />
            {email}
          </div>
          {phoneNumber && (
            <div className={styles.infomrationAndIcon}>
              <Phone />
              {phoneNumber}
            </div>
          )}
        </div>
        <div className={styles.imageClickButton}>
          <MouseClick width="32px" height="32px" />
        </div>
      </div>
      <div className={styles.nameCont}>{name.toUpperCase()}</div>
      <div className={styles.descriptionCont}>{description}</div>
      <div
        className={`${styles.onlineStatusCont} ${
          onlineStatus ? styles.online : styles.offline
        }`}
      >
        {onlineStatus ? "Online" : "Offline"}
      </div>
    </div>
  );
}
