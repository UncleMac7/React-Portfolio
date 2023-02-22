import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
    const [Matches, setMatches] = useState(false);

    useEffect(() =>{
        const media = window.matchMedia(query);
        if(media.Matches !== Matches)
        {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.Matches);
        window.addEventListener("resize",listener);
        return () => window.removeEventListener("resize", listener);

    }, [Matches, query]);

    return Matches;
}

export default useMediaQuery;