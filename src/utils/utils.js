// For generating post excerpts
export const generateExcerpt = (blocks, maxLength = 100) => {
    const plainText = blocks
    .map(block => block.children ? block.children.map(child => child.text).join('') : '')
    .join(' ');

    return plainText.length > maxLength ? `${plainText.substring(0, maxLength)}...` : plainText;
}

// For date/time formatting
export const dateFormatter = (format,input) => {
    let initDate = new Date(input);
    let options = {};
    let output = "";

    switch(format) {
        case 'simple-date':
            options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            };
            output = initDate.toLocaleDateString('en-US', {options});
            break;
        case 'simple-time':
            options = {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZone: 'America/Toronto'
            };
            output = initDate.toLocaleTimeString('en-US',{options}) + " EST";
            break;
        case 'blog-dateposted':
            options = {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
                timeZone: 'America/Toronto'
            };
            output = initDate.toLocaleString('en-US',{options});
            break;
        default: 
            output = input;
            break;
    }   

    return output;
}

// For Twitch output thumbnail resizing
export const thumbnailResize = (url, width, height) => {
    if (typeof url === 'undefined') {
      console.error('URL is undefined');
      console.error(width + 'x' + height);
      return;
    }

    return url
    .replace(/%\{width\}|\{width\}/g, width)
    .replace(/%\{height\}|\{height\}/g, height);    
}