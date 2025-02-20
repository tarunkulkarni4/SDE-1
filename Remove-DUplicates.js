{/*
   
    String Duplicates Removal
Difficulty: EasyAccuracy: 58.68%Submissions: 105K+Points: 2Average Time: 15m
Given a string s which may contain lowercase and uppercase characters. The task is to remove all duplicate characters from the string and find the resultant string. The order of remaining characters in the output should be same as in the original string.

Example 1:

Input: s = "geEksforGEeks"
Output: "geEksforG"
Explanation: After removing duplicate characters such as E, e, k, s, we have string as "geEksforG".
Example 2:

Input: s = "HaPpyNewYear"
Output: "HaPpyNewYr"
Explanation: After removing duplicate characters such as e, a, we have string as "HaPpyNewYr".

Using Hashing:

class Solution {
    String removeDuplicates(String s) {
        HashSet<Character> exists = new HashSet<>();
        StringBuilder ans = new StringBuilder();

        // Traverse through the string
        for (char c : s.toCharArray()) {
            
            // If character is not found in set, 
            // add it to result
            if (!exists.contains(c)) {
                ans.append(c);
                exists.add(c);
            }
        }
        
        return ans.toString();
    }
}

using freqArray:

 class Solution {

    // Function to remove duplicate characters
    public static String removeDuplicates(String s) {

        // Create an integer array to store 
        // frequency for ASCII characters
        int[] ch = new int[256];
        StringBuilder ans = new StringBuilder();

        // Traverse the input string using a normal for loop
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);  // Get the character at index i

            // Check if current character's frequency is 0
            if (ch[c] == 0) {

                // Add char if frequency is 0
                ans.append(c);

                // Increment frequency
                ch[c]++;
            }
        }
        return ans.toString();
    }

}

*/}