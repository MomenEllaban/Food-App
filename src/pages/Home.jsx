import React from "react";
import Hero from "../components/hero/Hero";
import Improve from "../components/improve/Improve";
import Quote from "../components/text/Quote";
import Chiefs from "../components/chiefs/Chiefs";




function Home() {

  return (
<>
<div className="container main">
    <Hero/>
    <Improve/>
    <Quote/>
    <Chiefs/>
    </div>
</>

  
  );
}

export default Home;
