const prepare = (word) =>{
    const wordLetters = word.toLowerCase().split("")
    const wordLettersFinished = (wordLetters.sort()).filter((letter) => {
        return (letter !== " " && letter !== "'") 
    })
    return wordLettersFinished
}


const anagramChecker = (word1, word2) =>{
    const preparedWord1 = prepare(word1)
    const preparedWord2 = prepare(word2)
    if (preparedWord1.length !== preparedWord2.length) return false
    let counter = 0
    preparedWord1.forEach((word1Letter, index) => {
        if (word1Letter !== preparedWord2[index])
            counter = counter + 1
    });
    return (counter === 0)
}


export{anagramChecker}