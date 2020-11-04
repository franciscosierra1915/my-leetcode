const a = "!low-salt!"; 
const b = "owls-lat!o"

function anagram(a, b) {
    if(a.length !== b.length){
        console.log("Not anagram")
        return
    }
    for(let i = 0; i < a.length; i++){
        let aarray = a.split("");
        let barray = b.split("");
        if(aarray[i] === barray[i]){
            
        } else {
            

        }
    }


}

anagram(a, b)