const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {

  class LinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
  }

  let list = new LinkedList();

  list.head = l;

  let listCurrent = list.head;

  function getLength(list) {
    while (listCurrent) {
      list.length++;
      listCurrent = listCurrent.next
    }
    return list.length;
  }

  let listLength = getLength(list);

  function removeAt(position) {
    if (position < 0 || list.length <= position ) {
      return null;
    }

    let current = list.head;

    if (position === 0) {
      list.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }

    list.length--;
    return current.value;
  }

  function indexOf(element) {
    let current = list.head;
    let index = 0;

    while (current) {
      if (current.value === element) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  let index = indexOf(k);
  removeAt(index);

  index = indexOf(k);
  removeAt(index);

  return list.head;
}

module.exports = {
  removeKFromList
};


// {
//   "next": {
//     "next": {
//       "next": {
// -        "next": {
// -          "next": {
// -            "next": [null]
// -            "value": 5
// -          }
// -          "value": 4
// -        }
// -        "value": 3
//       }
// -      "value": 3
//     }
//     "value": 2
//   }
//   "value": 1
// }