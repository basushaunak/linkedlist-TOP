import { LinkedList } from "./classes.js";

function init(){
    const linkedList = new LinkedList();
    console.log(linkedList);
    linkedList.append(10);
    linkedList.append(20);
    linkedList.prepend(0);
    linkedList.append(30);
    linkedList.prepend(100);
    console.log(linkedList.toString());
    console.log("linkedList.find(0): ",linkedList.find(10));
    console.log("linkedList.contains(30): ", linkedList.contains(30));

}

window.onload = init;