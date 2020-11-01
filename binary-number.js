// const head = [1,0,1]
// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. 
// The linked list holds the binary representation of a number. Return the decimal value of the number in the linked list.

function getDecimalValue(head) {

    // let binary = String(head.val);
    
    // while(head.next !== null) {
    //     head = head.next;
    //     binary += head.val
    // }

    // const reversed = head.reverse()
    // let count = 0
    // for(let i = 0; i < reversed.length; i++){
    //     if(reversed[i] === 1) {
    //         let value = Math.pow(2, i)
    //         count += value
    //     }
    // }

    // return count

    let binary = String(head.val);
    
    while(head.next !== null) {
        head = head.next;
        binary += head.val
    }
    // return parseInt(binary, 2);
    
    const reversed = binary.split("").reverse()
    let count = 0
    for(let i = 0; i < reversed.length; i++){
        let num = parseInt(reversed[i], 10)
        if( num === 1) {
            let value = Math.pow(2, i)
            count += value
        }
    }

    return count

};

getDecimalValue(head)