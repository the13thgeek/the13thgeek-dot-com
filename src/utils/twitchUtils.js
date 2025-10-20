// Twitch API integration for @the13thgeek

// Fetches info and checks if Twitch is live
export const fetchLiveData = async () => {
    //let requestUrl = `https://api.twitch.tv/helix/streams?user_login=${import.meta.env.VITE_TWITCH_CHANNEL_NAME}`;
    let requestUrl = `${import.meta.env.VITE_CLOUD_URL}/twitch/live-data`;

    try {
        let response = await fetch(requestUrl, {
            method: 'POST',
            headers: {
                "x-api-key": import.meta.env.VITE_SRS_API_KEY,
                "Content-Type": "application/json"
            },
        });
        let data = await response.json();
        return data.data;
    } catch (e) {
        console.error('Error: ',e);
        return null;
    }

}


// Loads latest VODs from Twitch
export const fetchVODs = async () => {
    let requestUrl = `${import.meta.env.VITE_CLOUD_URL}/twitch/live-vods`;

    let response = await fetch(requestUrl, {
        method: 'POST',
        headers: {
            "x-api-key": import.meta.env.VITE_SRS_API_KEY,
            "Content-Type": "application/json"
        },
    });
    let data = await response.json();
    return data.data;
}

// Loads most popular clips
export const fetchClips = async () => {
    let requestUrl = `${import.meta.env.VITE_CLOUD_URL}/twitch/live-clips`;

    let response = await fetch(requestUrl, {
        method: 'POST',
        headers: {
            "x-api-key": import.meta.env.VITE_SRS_API_KEY,
            "Content-Type": "application/json"
        },
    });
    let data = await response.json();
    return data.data;
}