import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import AboutPage from "./about/index"
import HomePage from "./home/index"
import Layout from "@/Components/Layout/Layout"
import { routes } from "@/routes"
import React, { useEffect } from "react"
import Home from "./Home"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === "/") {
      router.push(routes.START)
    }
  }, [])

  const renderPageComponent = () => {
    switch (router.pathname) {
      case routes.DEFAULT:
        return <Home />
      case routes.START:
        return <HomePage />
      case routes.ABOUTUS:
        return <AboutPage />
      default:
        return <HomePage />
    }
  }

  return <Layout>{renderPageComponent()}</Layout>
}
