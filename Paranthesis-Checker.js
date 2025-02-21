{/*

Parenthesis Checker

Given a string s, composed of different combinations of '(' , ')', '{', '}', '[', ']', verify the validity of the arrangement.
An input string is valid if:

         1. Open brackets must be closed by the same type of brackets.
         2. Open brackets must be closed in the correct order.

Examples :

Input: s = "[{()}]"
Output: true
Explanation: All the brackets are well-formed.
Input: s = "[()()]{}"
Output: true
Explanation: All the brackets are well-formed.
Input: s = "([]"
Output: False
Explanation: The expression is not balanced as there is a missing ')' at the end.
Input: s = "([{]})"
Output: False
Explanation: The expression is not balanced as there is a closing ']' before the closing '}'.
Constraints:
1 ≤ s.size() ≤ 106
s[i] ∈ {'{', '}', '(', ')', '[', ']'}

Solution:

class Solution {
    static boolean isBalanced(String s) {
        // Create a stack to hold characters
        Stack<Character> stack = new Stack<>();
        
        // Traverse through the string
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            
            // If it's an opening bracket, push it onto the stack
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else {
                // If it's a closing bracket, check for corresponding opening bracket
                if (stack.isEmpty()) {
                    return false;  // No opening bracket to match with
                }
                
                // Pop the top of the stack and check if it matches
                char top = stack.pop();
                if (c == ')' && top != '(' || c == '}' && top != '{' || c == ']' && top != '[') {
                    return false;  // Mismatched brackets
                }
            }
        }
        
        // If the stack is empty, it means all brackets are matched
        return stack.isEmpty();
    }
}

*/}