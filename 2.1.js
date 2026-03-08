let text = "Happy Women's Day";
let word = "Women";
let indexes = [];

let pos = text.indexOf(word);

while(pos !== -1){
    indexes.push(pos);
    pos = text.indexOf(word, pos +1);
}

console.log("Indexes:", indexes);