import "../styles/global.css";
import MyContext from "../contexts/myContext";
import { useState } from "react";
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  const[name, setName] = useState('')

  return (
    <MyContext.Provider value={{ name, setName }}>
      <Component {...pageProps} />
    // </MyContext.Provider>
  );
}

export default MyApp;
