import Navbar from "../Navbar/Navbar"
import styles from "./Layout.module.css"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.main}>
      <div className={styles.firstComponent}>
        <Navbar />
      </div>
      <div className={styles.secondComponent}>{children}</div>
    </div>
  )
}
