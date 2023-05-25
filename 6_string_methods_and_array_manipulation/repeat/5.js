let transformUpvotes = arr => {
   return arr.map(item => item.at(-1) === 'k' ? +item.slice(0, -1) * 1000 : +item)

}

console.log((transformUpvotes(['10k', '2.3k', '5k', '32', '28.4k'])))