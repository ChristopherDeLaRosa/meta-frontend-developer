import React from "react";
import { Link } from "react-router-dom";
import food1 from "../images/food1.avif";

const Header = () => {
    return(
        <header role="banner">
            <section className="fade-in">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional 
                        recipes served with a modern twist. Experience authentic flavors in a 
                        warm, welcoming atmosphere.
                    </p>
                    <Link to="/booking">
                        <button 
                            type="button" 
                            aria-label="Reserve a table at Little Lemon restaurant"
                        >
                            Reserve Table
                        </button>
                    </Link>
                </div>
                <div>
                    <img 
                        src={food1} 
                        alt="Delicious Mediterranean food served at Little Lemon restaurant"
                    />
                </div>
            </section>
        </header>
    );
};

export default Header;