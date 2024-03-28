import React from "react";
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <header className="primary-header flex">
            <div>
                <img src="https://github.com/ray-mak/space-tourism/assets/154634286/c177d138-d394-48f6-95a7-01479923bfa9" alt="space tourism logo" className="logo" />
            </div>
            <nav>
                <ul className="primary-navigation underline-indicators flex">
                    <li className="active"><Link className="ff-sans-cond uppercase text-white letter-spacing-2" to="/"><span>00</span>Home</Link></li>
                    <li><Link className="ff-sans-cond uppercase text-white letter-spacing-2" to="/destination"><span>01</span>Destination</Link></li>
                    <li><Link className="ff-sans-cond uppercase text-white letter-spacing-2" to="/crew"><span>02</span>Crew</Link></li>
                    <li><Link className="ff-sans-cond uppercase text-white letter-spacing-2" to="/technology"><span>03</span>Technology</Link></li>
                </ul>
            </nav>
        </header>
    )
}