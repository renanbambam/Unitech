import Headermob from "@/components/headermob";
import Head from "../app/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Homepage from "@/components/homepage";

export default function Home() {
  return (
    <main className="bg-[white]">
      <Head/>
      <Header />
      <Headermob />
      {/* <Body className="pl-24 pr-24">   */}
      {/* </Body> */}
      <Homepage />
      <Footer/>
    </main>
  );
}
