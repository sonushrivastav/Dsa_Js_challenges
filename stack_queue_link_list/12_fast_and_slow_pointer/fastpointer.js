// let a = 1
// let b = a
// a = 2

// let c = {name:"john"}
// let d = c
//  c.name = "jane"

// console.log(d);


function findMiddle(head){
    let slow = head
    let fast = head

    while(fast!== null && fast.next!== null){
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}



