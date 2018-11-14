const initialState = {
    common: {
        navOpen: false
    },
    photo: {
        nextId: 7,
        photos: [
            {
                id: 1,
                photo: 'https://vignette.wikia.nocookie.net/memoryalpha/images/5/52/Earl_Grey_tea%2C_hot.jpg/revision/latest?cb=20121209020531&path-prefix=en',
            },
            {
                id: 2,
                photo: 'https://vignette.wikia.nocookie.net/memoryalpha/images/5/52/Earl_Grey_tea%2C_hot.jpg/revision/latest?cb=20121209020531&path-prefix=en',
            },
            {
                id: 3,
                photo: 'https://vignette.wikia.nocookie.net/memoryalpha/images/5/52/Earl_Grey_tea%2C_hot.jpg/revision/latest?cb=20121209020531&path-prefix=en',
            },
            {
                id: 4,
                photo: 'https://vignette.wikia.nocookie.net/memoryalpha/images/5/52/Earl_Grey_tea%2C_hot.jpg/revision/latest?cb=20121209020531&path-prefix=en',
            },
            {
                id: 5,
                photo: 'https://vignette.wikia.nocookie.net/memoryalpha/images/5/52/Earl_Grey_tea%2C_hot.jpg/revision/latest?cb=20121209020531&path-prefix=en',
            },
            {
                id: 6,
                photo: 'https://vignette.wikia.nocookie.net/memoryalpha/images/5/52/Earl_Grey_tea%2C_hot.jpg/revision/latest?cb=20121209020531&path-prefix=en',
            },
        ]
    },
    album: {
        nextId: 3,
        albums: [
            {
                id: 1,
                name: 'Picard Day',
                photos: [1,2,3,4,5,6]
            },
            {
                id: 2,
                name: 'Test',
                photos: [7]
            }
        ]
    }
}

export default initialState;