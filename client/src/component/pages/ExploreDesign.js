import React from 'react'
import "../style/exploreDesign.css"

export default function ExploreDesign() {
  return (
    <div className="cards_container">
        <div className="card_design">
        <div className="card_image">
            <img src="https://koloapp.in/images/explore-design-ideas.webp" alt="card image" />
        </div>
        <div className="card_content">
            <h3>Explore Design Ideas</h3>
            <p>Thousands of bedroom, kitchen, bathroom, living room, dining, roof, interior, furniture & many more designs</p>
            <button>
            Start Exploring
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
            </button>
        </div>
    </div>

    <div className="card_design">
        <div className="card_image">
            <img src="https://koloapp.in/images/explore-design-ideas.webp" alt="card image" />
        </div>
        <div className="card_content">
            <h3>Explore Design Ideas</h3>
            <p>Thousands of bedroom, kitchen, bathroom, living room, dining, roof, interior, furniture & many more designs</p>
            <button>
            Start Exploring
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
            </button>
        </div>
    </div>
    </div>
  )
}
