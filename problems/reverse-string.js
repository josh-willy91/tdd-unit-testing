








function reverseString(word) {
    if(typeof word !== 'string') {
        throw new TypeError
    }
        let array = []
        for(let i = 0; i < word.length; i++) {
            let index = word[i]
            array.unshift(index)
        }
    return array.join('')
}


module.exports  = { reverseString }
