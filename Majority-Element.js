{/*
Majority Element

Given an array arr. Find the majority element in the array. If no majority exists, return -1.

A majority element in an array is an element that appears strictly more than arr.size()/2 times in the array.

Examples:

Input: arr[] = [3, 1, 3, 3, 2]
Output: 3
Explanation: Since, 3 is present more than n/2 times, so it is the majority element.
Input: arr[] = [7]
Output: 7
Explanation: Since, 7 is single element and present more than n/2 times, so it is the majority element.
Input: arr[] = [2, 13]
Output: -1
Explanation: Since, no element is present more than n/2 times, so there is no majority element.
Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)

BruteForce:

class GfG {

    // Function to find the Majority element in an array
    static int majorityElement(int[] arr) {
        int n = arr.length; 

        // Loop to consider each element as a candidate for majority
        for (int i = 0; i < n; i++) {
            int count = 0;

            // Inner loop to count the frequency of arr[i]
            for (int j = 0; j < n; j++) {
                if (arr[i] == arr[j]) {
                    count++;
                }
            }

            // Check if count of arr[i] is more than half the size of the array
            if (count > n / 2) {
                return arr[i];
            }
        }

        // If no majority element found, return -1
        return -1;
    }
}

Using Sorting:

class Solution {
    static int majorityElement(int arr[]) {
        // Step 1: Sort the array
        Arrays.sort(arr);

        // Step 2: Get the middle element
        int candidate = arr[arr.length / 2];

        // Step 3: Verify if the candidate is actually the majority element
        int count = 0;
        for (int num : arr) {
            if (num == candidate) {
                count++;
            }
        }

        // Step 4: Check if the count is more than n/2
        if (count > arr.length / 2) {
            return candidate;
        } else {
            return -1; // No majority element
        }
    }
}

 Using HashMap:

 
class GfG {
    
    // Function to find Majority element in an array
    // It returns -1 if there is no majority element
    static int majorityElement(int[] arr) {
        int n = arr.length;
        Map<Integer, Integer> countMap = new HashMap<>();

        // Traverse the array and count occurrences using the hash map
        for (int num : arr) {
            countMap.put(num, countMap.getOrDefault(num, 0) + 1);
          
            // Check if current element count exceeds n / 2
            if (countMap.get(num) > n / 2) {
                return num;
            }
        }

        // If no majority element is found, return -1
        return -1;
    }


Using Moore’s Voting Algorithm:

class Solution {
    static int majorityElement(int arr[]) {
        int votes=0;
        int candidate=-1;
        int n=arr.length;
        
        for(int i=0;i<arr.length;i++)
        {
            if(votes==0)
            {
                candidate=arr[i];
                votes=1;
            }
            else if(candidate==arr[i])
            {
                votes++;
            }
            else{
                votes--;
            }
        }
        
        votes=0;
        for(int i=0;i<arr.length;i++)
        {
            if(candidate==arr[i])
            {
                votes++;
            }
        }
        
        int result=n/2;
        if(votes>result)
        {
            return candidate;
        }
        else{
            return -1;
        }
    }
}
    
*/}