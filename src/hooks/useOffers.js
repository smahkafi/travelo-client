import { useEffect, useState } from "react";

const useOffer = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/arunabhnewar/volunteer-events/main/category.json')
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [])
    return offers;
}

export default useOffer;