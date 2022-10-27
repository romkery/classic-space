import {useFetch} from '#app';
import {UrIInstance} from '~/api/instance';

export interface IDailyPicture {
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
    getDailyPicture: async () => {
        const data: IDailyPicture = await useFetch(`${UrIInstance.baseUrl}planetary/apod?date=2004-08-23&${UrIInstance.key}`).data
        return data;
    }
}

export default DailyPictureAPI
