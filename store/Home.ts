import {defineStore} from 'pinia';

interface ICards {
    imgSrc: string,
    text: string,
    flexDirection: string
}

export const useHomeCardStore = defineStore('counter', () => {
    const cards: ICards[] = reactive([
        {
            imgSrc: "http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2017-11/20170523_sha_z03_456.jpg?itok=xpL1E0Gf",
            text: "The latest photos \n and \n videos \n from the rovers.",
            flexDirection: "row"
        },
        {
            imgSrc: "http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2017-11/20170523_sha_z03_456.jpg?itok=xpL1E0Gf",
            text: "Interesting \n news \n straight from space.",
            flexDirection: "row-reverse"
        }
    ])

    return {cards}
})

