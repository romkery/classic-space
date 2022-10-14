import {defineStore} from 'pinia';
import {reactive, ref, Ref, UnwrapNestedRefs} from '@vue/runtime-core';

export interface ICards {
    imgSrc: string,
    text: string,
    style: {
        flexDirection: string
        gridArea: string
        bg: string
    }
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
            style: {
                flexDirection: "row",
                gridArea: "1 / 1 / 2 / 3",
                bg: "hsla(280, 80%, 12%, .7)"
            },
        },
        {
            imgSrc: require("assets/img/home/mars.jpg"),
            text: "Interesting \n news \n straight from space.",
            style: {
                flexDirection: "row-reverse",
                gridArea: "2 / 1 / 3 / 2",
                bg: "hsla(270, 80%, 12%, .7)"
            },
        },
        {
            imgSrc: require("assets/img/home/mars.jpg"),
            text: "Interesting \n news \n straight from space.",
            style: {
                flexDirection: "row-reverse",
                gridArea: "2 / 2 / 3 / 3",
                bg: "hsla(260, 80%, 12%, .7)"
            },
        },
        {
            imgSrc: require("assets/img/home/mars.jpg"),
            text: "Interesting \n news \n straight from space.",
            style: {
                flexDirection: "row-reverse",
                gridArea: "3 / 1 / 4 / 2",
                bg: "hsla(250, 80%, 12%, .7)"
            },
        },
        {
            imgSrc: require("assets/img/home/mars.jpg"),
            text: "Interesting \n news \n straight from space.",
            style: {
                flexDirection: "row-reverse",
                gridArea: " 3 / 2 / 4 / 3",
                bg: "hsla(240, 80%, 12%, .7)"
            },
        },
        {
            imgSrc: require("assets/img/home/mars.jpg"),
            text: "Interesting \n news \n straight from space.",
            style: {
                flexDirection: "row-reverse",
                gridArea: "4 / 1 / 5 / 2",
                bg: "hsla(230, 80%, 12%, .7)"
            },
        },
        {
            imgSrc: require("assets/img/home/mars.jpg"),
            text: "Interesting \n news \n straight from space.",
            style: {
                flexDirection: "row-reverse",
                gridArea: "4 / 2 / 5 / 3",
                bg: "hsla(220, 80%, 12%, .7)"
            },
        }
    ])

    const animations = reactive({
        preview_title_h1: {
            state: false,
            animation: 'slideInLeft'
        },
        preview_title_img: {
            state: false,
            animation: 'slideInRight'
        },
        preview_h2: {
            state: false,
            animation: 'fadeInUp'
        },
        card: {
            state: false,
            animation: 'fadeInUp'
        },
    })

    const store = {cards, animations}

    return {store}
})

