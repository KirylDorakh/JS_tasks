function transformUpvotes(arr) {
    let result = []
    arr.forEach(function(item){
        if (item[item.length-1] === 'k'){
            item = Number(item.slice(0, -1)) * 1000
        } else {
            item = Number(item)
        }
        result.push(item)
    })
    return result
}

const arr = ['10k', '2.3k', '5k', '32', '28.4k'];
const result = transformUpvotes(arr);
console.log(result)

