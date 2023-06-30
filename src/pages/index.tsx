import Image from "next/image"
import { Inter } from "next/font/google"
import Navbar from "@/Components/Navbar/Navbar"
const inter = Inter({ subsets: ["latin"] })
import { useRouter } from "next/router"
import { routes } from "@/routes"
import Layout from "@/Components/Layout/Layout"
import AboutPage from "./AboutPage/aboutPage"
import HomePage from "./HomePage/HomePage"

export default function Home() {
  const router = useRouter()
  const getComponentToRender = () => {
    switch (router.pathname) {
      case "/":
        return <HomePage />
      case "/home":
        return <HomePage />
      case routes.ABOUTUS:
        return <AboutPage />
      default:
        return <HomePage />
    }
  }

  console.error(router.pathname)
  console.error(routes.ABOUTUS)
  return <Layout>{getComponentToRender()}</Layout>
}
