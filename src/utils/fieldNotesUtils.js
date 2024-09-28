import dataClient from './dataClient';

export const fetchEntries = async ({ limit = 3, orderBy = 'date desc' }) => {    
    const query = `
        *[_type == "gkBlogType" && isActive == true] | order(${orderBy})[0...${limit}] {
            _id,
            title,
            slug,
            category[]->{name},
            date,
            tags,
            "image":featuredImage.asset->url,
            content 
        }`;

    try {
        const output = await dataClient.fetch(query);
        return output;
    } catch (e) {
        console.error('Error: ',e);
        return null;
    }
    
}

export const getEntryBySlug = async ( {slug = null} ) => {
    const query = `
        *[_type == "gkBlogType" && isActive == true && slug.current == '${slug}'] | {
            _id,
            title,
            slug,
            category[]->{name},
            date,
            tags,
            "image":featuredImage.asset->url,
            content[] {
                ...,
                asset-> {
                _id,
                url,
                title
                }
            }
        }`;
    
    try {
        const output = await dataClient.fetch(query);
        return output[0];
    } catch (e) {
        console.error('Error: ',e);
        return null;
    }
}