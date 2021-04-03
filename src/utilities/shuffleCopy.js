Object.defineProperty(Array.prototype, 'shuffleCopy',
    {
        value: function() {
            let arrayCopy = [...this]
            for (let i = arrayCopy.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
            }
            return arrayCopy;
        }
    })


