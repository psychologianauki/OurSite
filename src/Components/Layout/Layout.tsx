import Navbar from "../Navbar/Navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Navbar />

      {children}
    </div>
  )
}
