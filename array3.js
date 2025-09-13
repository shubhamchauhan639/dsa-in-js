const heros = ["spiderMan","thor","hulk","flash","caption america"]
const anotherHeros = new Array("spiderMan","thor","hulk","flash","caption america")
console.log(heros);
console.log(anotherHeros);
console.log(heros===anotherHeros)
const two = new Array(2,3)
console.log(two);
const addHero = heros.push("batman")
console.log(addHero)
console.log(heros);
const removeHero = heros.shift()
console.log(heros);

const [spiderMan , thor,...rest] =["spiderMan","thor","hulk","flash","caption america"]
console.log(rest);
console.log(spiderMan);
const myherosCopy = [...heros]
console.log(myherosCopy);

// merge using spread

const emoji = ['smile','sad']
const vegie = ['carrot', 'onion']
const emotionalVegie = [...emoji,...vegie];
console.log(emotionalVegie);







