import React, { createContext, useEffect, useState } from 'react';

export const DetailsProvider = createContext(null);

const DetailsContext = ({ children }) => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('https://encode-tutorial-server.vercel.app/coursedetails')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, []);

    const allData = {details, setDetails}
    return (
        <div>
            <DetailsProvider.Provider value={allData}>
                {children}
            </DetailsProvider.Provider>
        </div>
    );
};

export default DetailsContext;