/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let response = new ListNode(-1),
      responseCopy = response;
  let sum =0, carry = 0;
    while(l1 || l2 || sum > 0){
        if(l1){
            sum += l1.val;
            l1 = l1.next;
        } 
        if(l2){
            sum += l2.val;
            l2 = l2.next; 
        }
        
        if(sum >= 10){
            sum -= 10;
            carry = 1;
        }

        responseCopy.next = new ListNode(sum);
        responseCopy = responseCopy.next;
        sum = carry;
        carry = 0;
    }
    return response.next;
};