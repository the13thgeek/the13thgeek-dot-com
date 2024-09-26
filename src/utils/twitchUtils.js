// Twitch API integration for @the13thgeek

// Fetches info and checks if Twitch is live
export const fetchLiveData = async () => {
    let requestUrl = `https://api.twitch.tv/helix/streams?user_login=${import.meta.env.VITE_TWITCH_CHANNEL_NAME}`;

    try {
        let response = await fetch(requestUrl, {
            headers: {
              'Authorization': `Bearer ${import.meta.env.VITE_TWITCH_ACCESS_TOKEN}`,
              'Client-Id': `${import.meta.env.VITE_TWITCH_CLIENT_ID}`
            }
        });
        let data = await response.json();
        return data.data[0];
    } catch (e) {
        console.error('Error: ',e);
        return null;
    }

}

// Loads latest VODs from Twitch
export const fetchVODs = async () => {
    let response = await fetch(`https://api.twitch.tv/helix/videos?user_id=${import.meta.env.VITE_TWITCH_USER_ID}&type=archive&first=8`, {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_TWITCH_ACCESS_TOKEN}`,
        'Client-Id': `${import.meta.env.VITE_TWITCH_CLIENT_ID}`
      }
    });
    let data = await response.json();
    return data.data;
}

// Loads most popular clips
export const fetchClips = async () => {
    let response = await fetch(`https://api.twitch.tv/helix/clips?broadcaster_id=${import.meta.env.VITE_TWITCH_USER_ID}`, {
        headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_TWITCH_ACCESS_TOKEN}`,
        'Client-Id': `${import.meta.env.VITE_TWITCH_CLIENT_ID}`
        }
    });
    let data = await response.json();
    return data.data;
}