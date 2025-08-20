import React from "react";
import { Link } from "react-router-dom";

const ConfirmedBooking = () => {
    return(
        <header role="banner">
            <section className="fade-in">
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <h1 style={{ color: '#F4CE14', marginBottom: '1rem' }}>
                        🎉 Booking Confirmed!
                    </h1>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                        Thank you for choosing Little Lemon. We look forward to serving you!
                        You will receive a confirmation email shortly with your reservation details.
                    </p>
                    <Link to="/">
                        <button 
                            type="button"
                            aria-label="Return to homepage"
                        >
                            Return to Homepage
                        </button>
                    </Link>
                </div>
            </section>
        </header>
    );
};

export default ConfirmedBooking;