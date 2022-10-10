import {defineStore} from 'pinia';
import {reactive, Ref, UnwrapNestedRefs} from '@vue/runtime-core';
import {useStorage} from '@vueuse/core';

interface ICards {
    imgSrc: string,
    text: string,
    flexDirection: string
}

export interface IHome {
    cards: UnwrapNestedRefs<ICards[]>
    animationEnd: Ref<boolean>
}

export const useHomeCardStore = defineStore("Home", () => {
    const cards = reactive([
        {
            imgSrc: require("assets/img/home/mars.jpg"),
            text: "The latest photos \n and \n videos \n from the rovers.",
            flexDirection: "row"
        },
        {
            imgSrc: require("assets/img/home/mars.jpg"),
            text: "Interesting \n news \n straight from space.",
            flexDirection: "row-reverse"
        }
    ])

    const isTitleChecked = useStorage("isTitleChecked", false, sessionStorage);
    const isInfoChecked = useStorage("isInfoChecked", false, sessionStorage);

    const store = {cards, isInfoChecked, isTitleChecked}

    return {store}
})

