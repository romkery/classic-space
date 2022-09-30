import {defineStore} from 'pinia';

interface ICards {
    imgSrc: string,
    text: string,
    flexDirection: string
}

export const useHomeCardStore = defineStore('counter', () => {
    const cards: ICards[] = reactive([
        {
            imgSrc: "assets/img/home/mars.jpg",
            text: "The latest photos \n and \n videos \n from the rovers.",
            flexDirection: "row"
        },
        {
            imgSrc: "assets/img/home/mars.jpg",
            text: "Interesting \n news \n straight from space.",
            flexDirection: "row-reverse"
        }
    ])

    return {cards}
})

