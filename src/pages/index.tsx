import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
