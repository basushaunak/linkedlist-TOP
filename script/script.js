import { LinkedList } from "./classes.js";

function init() {
  const linkedList = new LinkedList();
  const linkedListDisplay = document.querySelector("#linked-list-display");
  populateLinkdeList(linkedList);
  displayLinkedList(linkedList, linkedListDisplay);
}

function displayLinkedList(linkedList, div) {
  div.innerText = linkedList.toString();
}

function populateLinkdeList(ll) {
  for (let i = 0; i < 20; i++) {
    ll.append(Math.floor(Math.random() * 200));
  }
}
window.onload = init;
