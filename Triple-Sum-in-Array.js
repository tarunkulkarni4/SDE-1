{/*
    Triplet Sum in Array

Given an array arr[] and an integer target, determine if there exists a triplet in the array whose sum equals the given target.

Return true if such a triplet exists, otherwise, return false.

Examples

Input: arr[] = [1, 4, 45, 6, 10, 8], target = 13 
Output: true 
Explanation: The triplet {1, 4, 8} sums up to 13
Input: arr[] = [1, 2, 4, 3, 6, 7], target = 10 
Output: true 
Explanation: The triplets {1, 3, 6} and {1, 2, 7} both sum to 10. 
Input: arr[] = [40, 20, 10, 3, 6, 7], target = 24 
Output: false 
Explanation: No triplet in the array sums to 24
Constraints:
3 ≤ arr.size() ≤ 103
1 ≤ arr[i] ≤ 105

 
1.Using sorting this one is optimized  but have constant space o(1)

class Solution {
    // Should return true if there is a triplet with sum equal
    // to x in arr[], otherwise false
    public static boolean hasTripletSum(int arr[], int target) {
        // Your code Here
        
        int n=arr.length;
        
        Arrays.sort(arr);
        
        for(int i=0;i<n-2;i++)
        {
            int left=i+1;
            int right=n-1;
            while(left<right)
            {
                int sum=arr[left]+arr[right]+arr[i];
                if(sum==target)
                {
                    return true;
                }
                else if(sum<target)
                {
                    left++;
                }
                else{
                    right--;
                }
            }
        }
        return false;
    }
}

2.using Hashset space complexiety changes to o(N)


class GfG {
    static boolean hasTripletSum(int[] arr, int target) {
        int n = arr.length;
        
        // Fix the first element as arr[i]
        for (int i = 0; i < n - 2; i++) {
            
            // Hash set to store potential second elements
            Set<Integer> st = new HashSet<>();
            
            // Fix the third element as arr[j]
            for (int j = i + 1; j < n; j++) {
                int second = target - arr[i] - arr[j];
                
                // Search for second element in hash set
                if (st.contains(second)) {
                    return true;
                }
                
                // Add arr[j] as a potential second element
                st.add(arr[j]);
            }
        }

        // If we reach here, then no triplet was found
        return false;
    }
}


3.Brute force space complexiety remains constant

class GfG {
  
    // Function to check if there exists a triplet with the given sum
    static boolean hasTripletSum(int[] arr, int target) {
        int n = arr.length;
        
        // Fix the first element as arr[i]
        for (int i = 0; i < n - 2; i++) {
            
            // Fix the second element as arr[j]
            for (int j = i + 1; j < n - 1; j++) {
                
                // Now look for the third number
                for (int k = j + 1; k < n; k++) {
                    if (arr[i] + arr[j] + arr[k] == target)
                        return true; // If a triplet is found
                }
            }
        }

        // If we reach here, then no triplet was found
        return false;
    }
}


*/}