import React from 'react'
import "../style/uperfooter.css"

export default function UperFooter() {
  return (
    <>
        <div className="action_section">
            <div className="left_img">
                <img src="https://koloapp.in/_next/static/media/background-graphic.521b6160.webp" alt="to join kolo cumminity" />
            </div>
            <div className="action_content">
                <h2>Join the Community to <br />
                    start finding Ideas &<br />
                    Professionals</h2>
                <div className="app_link">
                    <img src="https://koloapp.in/_next/static/media/download_from_play_store.715651b7.png" alt="from playstore" />
                    <img src="https://koloapp.in/_next/static/media/download_from_app_store.d33956f4.png" alt="from app store" />
                </div>
            </div>
        </div>
    </>
  )
}
