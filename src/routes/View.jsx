import React from "react";
import { Route, Routes } from "react-router-dom";
import VoiceChanges from "../pages/VoiceChanges";
import Vowels from "../pages/Vowels";
import Home from "../pages/Home";
import CardTwoA from "../pages/CardTwoA";

const View = () => {
  return (
    <>
      <Routes>
      
      
        
        {/* <Route path="/" element={<Home />} />

        <Route path="/vowels" element={<Vowels />} />
        <Route path="/voicechange" element={<VoiceChanges />} /> */}
        <Route path="/" element={<CardTwoA />} />

      </Routes>
    </>
  );
};

export default View;
