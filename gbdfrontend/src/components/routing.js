import React, { Component } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home'
import ContReadFile from '../pages/confMenu/'

function Routing(){
    return (
        <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/hola" element={<ContReadFile />} />
      </Routes>
      </BrowserRouter>
        )
}

export default Routing;