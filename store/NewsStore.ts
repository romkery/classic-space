import {defineStore} from 'pinia';
import {reactive, Ref} from '@vue/runtime-core';
import DailyPictureAPI from '~/api/News/DailyPictureAPI';

export const useNewsStore = defineStore("apiStore", () => {

    let APOD: any = reactive({});

    const getAPODData = () => {
        APOD = DailyPictureAPI.getAPOD();
        console.log(APOD)
        return APOD;
    }

    const store = {APOD, getAPODData}
    return {store}
})
