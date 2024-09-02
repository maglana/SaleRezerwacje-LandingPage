import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setShowBanner(false);
    };

    const handleCustomize = () => {
        alert("Tu możesz dostosować swoje zgody."); 
    };

    return (
        showBanner && (
            <div className="cookie-consent">
                <p>
                    Nasza strona korzysta z plików cookies, które umożliwiają poprawne
                    działanie strony i pomagają nam świadczyć usługi na najwyższym
                    poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich tych
                    plików i przejść do strony lub dostosować użycie plików do swoich
                    preferencji.
                </p>
                <div className="cookie-buttons">
                    <button onClick={handleAccept}>AKCEPTUJĘ</button>
                    <button onClick={handleCustomize}>DOSTOSUJ ZGODY</button>
                </div>
            </div>
        )
    );
}

export default CookieConsent;
