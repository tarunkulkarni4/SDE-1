{/*
Roman Number to Integer
Difficulty: EasyAccuracy: 43.31%Submissions: 184K+Points: 2Average Time: 20m
Given a string in Roman number format (s), your task is to convert it to an integer. Various symbols and their values are given below.
Note: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000

Examples:

Input: s = "IX"
Output: 9
Explanation: IX is a Roman symbol which represents 10 – 1 = 9.
Input: s = "XL" 
Output: 40
Explanation: XL is a Roman symbol which represents 50 – 10 = 40.
Input: s = "MCMIV" 
Output: 1904
Explanation: M is 1000, CM is 1000 – 100 = 900, and IV is 4. So we have total as 1000 + 900 + 4 = 1904.

class Solution {
    // Finds decimal value of a given roman numeral
    public int romanToDecimal(String s) {
        // code here
        Map<Character,Integer>map=new HashMap<>();
        map.put('I',1);
        map.put('V',5);
        map.put('X',10);
        map.put('L',50);
        map.put('C',100);
        map.put('D',500);
        map.put('M',1000);
        
        int result=map.get(s.charAt(s.length()-1));
        for(int i=s.length()-2;i>=0;i--)
        {
            if(map.get(s.charAt(i))<map.get(s.charAt(i+1)))
            {
                result-=map.get(s.charAt(i));
            }
            else{
                 result+=map.get(s.charAt(i));
            }
        }
        return result;
    }
}
*/}