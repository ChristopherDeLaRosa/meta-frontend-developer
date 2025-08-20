import React, { useReducer } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";
import Header from "./Header";

const Main = () => {
    // Función para generar números aleatorios seeded
    const seededRandom = (seed) => {
        const m = 2**35 - 31;
        const a = 185852;
        let s = seed % m;
        return () => {
            return (s = s * a % m) / m;
        };
    };

    // API simulada para obtener horarios disponibles
    const fetchAPI = (date) => {
        const result = [];
        const random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(`${i}:00`);
            }
            if(random() < 0.5) {
                result.push(`${i}:30`);
            }
        }
        return result.length > 0 ? result : ['18:00', '19:00', '20:00']; // Fallback
    };

    // API simulada para enviar formulario
    const submitAPI = (formData) => {
        // Validación básica
        return formData.date && formData.time && formData.guests && formData.occasion;
    };

    const initialState = { 
        availableTimes: fetchAPI(new Date())
    };

    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, action) {
        const date = action.type === 'UPDATE_TIMES' ? new Date(action.date) : new Date();
        return {
            availableTimes: fetchAPI(date)
        };
    }

    const navigate = useNavigate();
    
    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed");
            return true;
        }
        return false;
    };

    return(
        <main role="main">
            <Routes>
                <Route path="/" element={<Header />} />
                <Route 
                    path="/booking" 
                    element={
                        <Booking 
                            availableTimes={state} 
                            dispatch={dispatch} 
                            submitForm={submitForm}
                        />
                    } 
                />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </main>
    );
};

export default Main;