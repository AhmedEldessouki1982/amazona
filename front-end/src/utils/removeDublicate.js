//this function removes the dublicate in array and add the product qty

export default function removeDublicates (arr) {
    let obj = {};
    arr.map(
        product => obj[product] = 0
    )
    for (const proparty in obj) {
        let i = 0;
        arr.map (
            element => element === proparty && i++
        )
        obj[proparty] = i
    }
    return obj;
}