import { useEffect } from "react";

// Tawk.to component
const TawkTo = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://embed.tawk.to/679369413a84273260745a8b/1iibt6ach";
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");
        document.body.appendChild(script);

        return () => {
            // Cleanup script if needed
            document.body.removeChild(script);
        };
    }, []);

    return null; // No visible UI, just a script loader
};

export default TawkTo;