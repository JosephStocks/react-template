import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function BaseLayout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
