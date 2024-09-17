import axios from 'axios';

const API_BASE_URL = `${window.location.protocol}//${window.location.hostname}:8000/api`;  // Update if needed

export const fetchNewChfid = async () => {
    console.log("newChfid")
    try {
        const response = await axios.get(`${API_BASE_URL}/generate-chfid/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching new CHFID:", error);
        throw error;
    }
};