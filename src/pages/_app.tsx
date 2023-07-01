import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import AboutPage from "./about/index"
import HomePage from "./home"
import Layout from "@/Components/Layout/Layout"
import { routes } from "@/routes"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // Render the appropriate page component based on the route
  const renderPageComponent = () => {
    switch (router.pathname) {
      case routes.DEFAULT:
        return <HomePage />
      case routes.START:
        return <HomePage />
      case routes.ABOUTUS:
        return <AboutPage />
      default:
        return null
    }
  }

  return <Layout>{renderPageComponent()}</Layout>
}
