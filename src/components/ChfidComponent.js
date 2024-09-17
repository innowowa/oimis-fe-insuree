import React, { useState } from 'react';
import { fetchNewChfid } from '../index';

const ChfidComponent = () => {
    const [chfid, setChfid] = useState('');

    const handleFetchChfid = async () => {
        try {
            const newChfid = await fetchNewChfid();
            setChfid(newChfid);
        } catch (error) {
            console.error("Error fetching CHFID:", error);
        }
    };

    return (
        <div>
            <button onClick={handleFetchChfid}>Get New CHFID</button>
            {chfid && <p>New CHFID: {chfid}</p>}
        </div>
    );
};

export default ChfidComponent;