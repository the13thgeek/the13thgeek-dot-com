import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Navbar from "../components/Navbar/Navbar";
import Connect from "../components/Connect/Connect";
import Footer from "../components/Footer/Footer";

const FieldNotes = () => {
    return (
        <>
        <header className="main">
            <Navbar />
            <div className="page-title-bar about">
                <div className="content-container">
                    <div className="descriptor about-1-profile">
                        <span className="title">Profile</span>
                    </div>
                    <h1>Field Notes</h1>
                </div>
            </div>
        </header>
        <main className="page-about"></main>
        </>
    );
}

export default FieldNotes