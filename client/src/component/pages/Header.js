import React from "react";
import "../style/Header.css"
import {Link} from "react-router-dom"
export default function Header() {
  return (
    <>
    <header>
        <nav>
            <div className="left_menu">
                <div className="logo">
                    <img src="https://koloapp.in/img/kolo_icon.webp" alt="Logo" />
                </div>
                <div className="menu">
                    <Link to={"/"}>Designs</Link>
                    <Link to={"/"}>Professionals</Link>
                    <Link to={"/"}>Magazine</Link>
                </div>
            </div>
            <div className="right_menu">
                <img src="https://koloapp.in/_next/static/media/download_from_play_store.715651b7.png" alt="from playstore" />
                <img src="https://koloapp.in/_next/static/media/download_from_app_store.d33956f4.png" alt="from app store" />
            </div>
        </nav>

        <div className="hero_section">
            <h1>India's Largest Homen Community Nitish kumar</h1>
            <h2>Find Designs · Find Professionals · Ask Queries</h2>
            <div className="right_menu">
                <img src="https://koloapp.in/_next/static/media/download_from_play_store.715651b7.png" alt="from playstore" />
                <img src="https://koloapp.in/_next/static/media/download_from_app_store.d33956f4.png" alt="from app store" />
            </div>
        </div>
    </header>
    </>
  );
}
