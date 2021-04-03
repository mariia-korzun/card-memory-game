export default class CardSevice {
    cards = [
        {
            id: 1,
            className: 'fa fa-heart',
        },
        {
            id: 2,
            className: 'fa fa-heart',
        },
        {
            id: 3,
            className: "fa fa-birthday-cake",
        },
        {
            id: 4,
            className: "fa fa-birthday-cake",
        },
        {
            id: 5,
            className: "fa fa-star",
        },
        {
            id: 6,
            className: "fa fa-star",
        },
        {
            id: 7,
            className: "fa fa-paw",
        },
        {
            id: 8,
            className: "fa fa-paw",
        },
        {
            id: 9,
            className: "fa fa-cloud",
        },
        {
            id: 10,
            className: "fa fa-cloud",
        },
        {
            id: 11,
            className: "fa fa-plane",
        },
        {
            id: 12,
            className: "fa fa-plane",
        }
    ]

    fetchCards() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.cards)
            }, 1000)
        })
    }
}

