import { LinkedList } from "./classes.js";

function init() {
  const linkedList = new LinkedList();
  const linkedListDisplay = document.querySelector("#linked-list-display");
  const displayResultDiv = document.querySelector(".display-result-div");
  const inputValue = document.querySelector("#value");
  const inputIndex = document.querySelector("#index");
  document.addEventListener("click", (event) => {
    if (event.target.matches("button")) {
      event.preventDefault();
      displayResultDiv.classList.add("hidden");
      let btn = event.target.id;
      switch (btn) {
        case "btn-prepend": {
          let val = inputValue.value.trim();
          if (val.length === 0) {
            alert("Please enter a value to prepend!");
            inputValue.focus();
            return;
          }
          if (!linkedList.prepend(val)) {
            alert("Something went wrong!");
            return;
          }
          displayLinkedList(linkedList, linkedListDisplay);
          break;
        }
        case "btn-append": {
          let val = inputValue.value.trim();
          if (val.length === 0) {
            alert("Please enter a value to prepend!");
            inputValue.focus();
            return;
          }
          if (!linkedList.append(val)) {
            alert("Something went wrong!");
            return;
          }
          displayLinkedList(linkedList, linkedListDisplay);
          break;
        }
        case "btn-insert-at": {
          let val = inputValue.value.trim();
          if (val.length === 0) {
            alert("Please enter a value to prepend!");
            inputValue.focus();
            return;
          }
          let index = Number(inputIndex.value.trim());
          if (isNaN(index) || index < 0 || index >= linkedList.size) {
            alert("Please enter a valid Index number!");
            inputIndex.focus();
            return;
          }
          if (!linkedList.insertAt(val, index)) {
            alert("Something went wrong!");
            return;
          }
          displayLinkedList(linkedList, linkedListDisplay);
          break;
        }
        case "btn-remove-at-index": {
          let index = Number(inputIndex.value.trim());
          if (isNaN(index) || index < 0 || index > linkedList.size) {
            alert("Please enter a valid Index number!");
            inputIndex.focus();
            return;
          }
          if (!linkedList.removeAt(index)) {
            alert("Something went wrong!");
            return;
          }
          displayLinkedList(linkedList, linkedListDisplay);
          break;
        }
        case "btn-remove-at-value": {
          let val = inputValue.value.trim();
          if (val.length === 0) {
            alert("Please enter a value to prepend!");
            inputValue.focus();
            return;
          }
          let index = linkedList.find(val);
          if (index === -2) {
            alert("list is empty, nothing to remove");
            return;
          }
          if (index === -1) {
            alert(`Unable to find ${val} in the list.`);
            return;
          }
          if (!linkedList.removeAt(index)) {
            alert("Something went wrong!");
            return;
          }
          while (index >= 0) {
            index = linkedList.find(val);
            if (index >= 0) {
              linkedList.removeAt(index);
            }
          }
          displayLinkedList(linkedList, linkedListDisplay);
          break;
        }
        case "btn-pop": {
          linkedList.pop();
          displayLinkedList(linkedList, linkedListDisplay);
          break;
        }
        case "btn-shift": {
          linkedList.shift();
          displayLinkedList(linkedList, linkedListDisplay);
          break;
        }
        case "btn-size": {
          displayResultDiv.classList.remove("hidden");
          displayResultDiv.innerHTML = `<p>Size: <span class="red-text">${linkedList.size}</span></p>`;
          break;
        }
        case "btn-head": {
          displayResultDiv.classList.remove("hidden");
          displayResultDiv.innerHTML = `<p>"Head"'s value: <span class="red-text">${linkedList.head.value}</span></p>`;
          break;
        }
        case "btn-tail": {
          displayResultDiv.classList.remove("hidden");
          displayResultDiv.innerHTML = `<p>"Tail"'s value: <span class="red-text">${linkedList.tail.value}</span></p>`;
          break;
        }
        case "btn-find": {
          let val = inputValue.value.trim();
          if (val.length === 0) {
            alert("Please enter a value to prepend!");
            inputValue.focus();
            return;
          }
          let index = linkedList.find(val);
          let str = ``;
          if(index === -2){
            str = `<p class="red-text">Linked List is empty!</p>`;
          }else if(index === -1){
            str = `<p class="red-text">${val} not found in the Linked List</p>`;
          }else{
            str = `<p>Found <span class="red-text">${val}</span> at index: <span class="red-text">${index}</span>`
          }
          displayResultDiv.classList.remove("hidden");
          displayResultDiv.innerHTML = str;
          break;
        }
        case "btn-contains": {
          let val = inputValue.value.trim();
          if (val.length === 0) {
            alert("Please enter a value to prepend!");
            inputValue.focus();
            return;
          }
          let str = `<p>Status of ${val}: `;
          let found = linkedList.contains(val);
          if(found){
            str += `<span class="green-text">Found</span></p>`
          }else{
            str += `<span class="red-text">Not Found</span></p>`
          }
          displayResultDiv.classList.remove("hidden");
          displayResultDiv.innerHTML = str;
          break;
        }
        case "btn-to-string": {
          displayResultDiv.classList.remove("hidden");
          displayResultDiv.innerHTML=`<p class="red-text">${linkedList.toString()}</p>`
          break;
        }
        case "btn-at":{
          let index = Number(inputIndex.value.trim());
          if (isNaN(index) || index < 0 || index > linkedList.size) {
            alert("Please enter a valid Index number!");
            inputIndex.focus();
            return;
          }
          displayResultDiv.classList.remove("hidden");
          displayResultDiv.innerHTML=`<p>Value: <span class="red-text">${linkedList.at(index).value}</span></p>`
          break;
        }
        default: {
          alert("How did we get here??!"+btn);
          break;
        }
      }
    }
  });
  populateLinkdeList(linkedList);
  displayLinkedList(linkedList, linkedListDisplay);
}

function displayLinkedList(linkedList, div) {
  let array = linkedList.toArray();
  let str = `<p>`;
  for (let i = 0; i < array.length; i++) {
    str += `${array[i]}<span class="red-text">=> </span>`;
  }
  str += `null</p>`;
  div.innerHTML = str;
}

function populateLinkdeList(ll) {
  for (let i = 0; i < 20; i++) {
    ll.append(Math.floor(Math.random() * 200));
  }
}
window.onload = init;
