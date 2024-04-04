// import React, {useEffect, useMemo } from "react";
// import { useDispatch } from "react-redux";
// import { setLang } from "./redux/lang";
// import { useStoreState } from "./redux/selector";
// import locale from "./localisation/locale.json";

import React from "react";
import Section from "./Components/Section";
import Navbar from "./Components/Navbar";
import Trending from "./Components/Trending";

function App() {
  // const states = useStoreState();
  // const dispatch = useDispatch();
  // const langData = useMemo(() => locale[states.lang], [states.lang]);


  {/* <h1>{langData.name}</h1>

      <button onClick={() => dispatch(setLang("uz"))}>UZ</button>
``      <button onClick={() => dispatch(setLang("en"))}>En</button> */}


  // useEffect(() => {
  //   document.title = langData.document_title;
  // }, [langData.document_title]);

  return (
    <div className="App">
      <Navbar/>
      <Section />
      <Trending/>
    </div>
  );
}

export default App;
