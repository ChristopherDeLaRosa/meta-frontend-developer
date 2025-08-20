import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: 1,
        occasion: ""
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.date) newErrors.date = "Date is required";
        if (!formData.time) newErrors.time = "Time is required";
        if (!formData.guests || formData.guests < 1) newErrors.guests = "At least 1 guest required";
        if (!formData.occasion) newErrors.occasion = "Occasion is required";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            const success = submitForm(formData);
            if (!success) {
                alert("There was an error processing your reservation. Please try again.");
            }
        }
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }));
        }
        
        // Update available times when date changes
        if (field === 'date') {
            dispatch({ type: 'UPDATE_TIMES', date: value });
        }
    };

    return (
        <header>
            <section>
                <h1>Reserve a Table</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date *</label>
                            <input 
                                id="book-date"
                                name="date"
                                type="date" 
                                value={formData.date}
                                min={new Date().toISOString().split('T')[0]}
                                onChange={(e) => handleInputChange('date', e.target.value)}
                                required
                                aria-describedby={errors.date ? "date-error" : undefined}
                            />
                            {errors.date && (
                                <span id="date-error" role="alert" style={{color: 'red'}}>
                                    {errors.date}
                                </span>
                            )}
                        </div>
                        
                        <div>
                            <label htmlFor="book-time">Choose Time *</label>
                            <select 
                                id="book-time"
                                name="time"
                                value={formData.time}
                                onChange={(e) => handleInputChange('time', e.target.value)}
                                required
                                aria-describedby={errors.time ? "time-error" : undefined}
                            >
                                <option value="">Select a Time</option>
                                {availableTimes.availableTimes.map(time => (
                                    <option key={time} value={time}>{time}</option>
                                ))}
                            </select>
                            {errors.time && (
                                <span id="time-error" role="alert" style={{color: 'red'}}>
                                    {errors.time}
                                </span>
                            )}
                        </div>
                        
                        <div>
                            <label htmlFor="book-guests">Number of Guests *</label>
                            <input 
                                id="book-guests"
                                name="guests"
                                type="number"
                                min="1"
                                max="10"
                                value={formData.guests}
                                onChange={(e) => handleInputChange('guests', parseInt(e.target.value) || "")}
                                required
                                aria-describedby={errors.guests ? "guests-error" : undefined}
                            />
                            {errors.guests && (
                                <span id="guests-error" role="alert" style={{color: 'red'}}>
                                    {errors.guests}
                                </span>
                            )}
                        </div>
                        
                        <div>
                            <label htmlFor="book-occasion">Occasion *</label>
                            <select 
                                id="book-occasion"
                                name="occasion"
                                value={formData.occasion}
                                onChange={(e) => handleInputChange('occasion', e.target.value)}
                                required
                                aria-describedby={errors.occasion ? "occasion-error" : undefined}
                            >
                                <option value="">Select an Option</option>
                                <option value="birthday">Birthday</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="date">Date Night</option>
                                <option value="business">Business Dinner</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.occasion && (
                                <span id="occasion-error" role="alert" style={{color: 'red'}}>
                                    {errors.occasion}
                                </span>
                            )}
                        </div>
                        
                        <div>
                            <input 
                                type="submit" 
                                value="Make Your Reservation"
                                aria-label="Submit reservation form"
                            />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;