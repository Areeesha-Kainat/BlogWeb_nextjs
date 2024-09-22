"use client"

import Footer from "./components/front/Footer";
import Head1 from "./components/front/Head1";
import Head2 from "./components/front/Head2";
import Header from "./components/front/Header";
import Nav from "./components/front/Nav";




export default function Home() {
  return (
    <div>
       <Nav />
       <br />
       <Header />
       <br />
       <Head1 />
       <Head2 />
       <br />
       <Footer />
    </div>
  );
}
