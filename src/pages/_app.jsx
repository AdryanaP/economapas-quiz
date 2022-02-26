import "../styles/global.css";
import MyContext from "../contexts/myContext";
import { useState } from "react";
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {

  return (
    // <MyContext.Provider value={{ questions, setQuestions }}>
      <Component {...pageProps} />
    // </MyContext.Provider>
  );
}

export default MyApp;
