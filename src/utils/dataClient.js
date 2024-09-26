import { createClient } from "@sanity/client";

const dataClient = createClient({
    projectId: '94cv7x6u',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-09-18'
});

export default dataClient