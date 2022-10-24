import {useFetch} from '#app';

const apiKey: string = '?api_key=afnJ1XFijXcMMDHkRZY16keAbGZNgRY2Va0b8NCu';
const baseUrl: string = `https://api.nasa.gov/`;

export interface IAPOD {
    copyright: string
    date: string
    explanation: string
    hdurl: string
    media_type: string
    service_version: string
    title: string
    url: string
}

const DailyPictureAPI = {
    getAPOD: async () => {
        const {data} = await useFetch(`${baseUrl}planetary/apod${apiKey}`)
        return data;
    }
}

export default DailyPictureAPI
