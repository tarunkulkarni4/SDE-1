{/*

    Anagram
Difficulty: EasyAccuracy: 44.93%Submissions: 381K+Points: 2Average Time: 20m
Given two strings s1 and s2 consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, "act" and "tac" are an anagram of each other. Strings s1 and s2 can only contain lowercase alphabets.

Note: You can assume both the strings s1 & s2 are non-empty.

Examples :

Input: s1 = "geeks", s2 = "kseeg"
Output: true
Explanation: Both the string have same characters with same frequency. So, they are anagrams.
Input: s1 = "allergy", s2 = "allergic"
Output: false
Explanation: Characters in both the strings are not same, so they are not anagrams.
Input: s1 = "g", s2 = "g"
Output: true
Explanation: Character in both the strings are same, so they are anagrams.

Using Sorting:

class Solution {
    // Function is to check whether two strings are anagram of each other or not.
    public static boolean areAnagrams(String s1, String s2) {

        // Your code here
        char[] c1=s1.toCharArray();
        char[] c2=s2.toCharArray();
        
        Arrays.sort(c1);
        Arrays.sort(c2);
        
        return Arrays.equals(c1,c2);
    }
}


Using freqArray:


class Solution {
    // Function is to check whether two strings are anagram of each other or not.
    public static boolean areAnagrams(String s1, String s2) {

        // Your code here
      int [] freq=new int[26];
      
      for(int i=0;i<s1.length();i++)
      {
       freq[s1.charAt(i)-'a']++;   
      }
      
      for(int i=0;i<s2.length();i++)
      {
       freq[s2.charAt(i)-'a']--;   
      }
      
      for(int i=0;i<freq.length;i++)
      {
          if(freq[i]!=0)
          {
              return false;
          }
      }
      return true;
    }
}

using HashMAp:

class GfG {
    
    static boolean areAnagrams(String s1, String s2) {
        
        // Create a hashmap to store character frequencies
        HashMap<Character, Integer> charCount = new HashMap<>();
        
        // Count frequency of each character in string s1
        for (char ch : s1.toCharArray()) 
            charCount.put(ch, charCount.getOrDefault(ch, 0) + 1);
  
        // Count frequency of each character in string s2
        for (char ch : s2.toCharArray()) 
            charCount.put(ch, charCount.getOrDefault(ch, 0) - 1);
  
        // Check if all frequencies are zero
        for (var pair : charCount.entrySet()) {
            if (pair.getValue() != 0) {
                return false;
            }
        }
        
        // If all conditions satisfied, they are anagrams
        return true;
    }
}
    
*/}