










function myMap(array, cb) {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        let el = array[i]
        newArray.push(cb(el))
    }
    return newArray
}



module.exports = { myMap }
