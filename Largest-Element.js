{/*
  
    Third largest element
Difficulty: EasyAccuracy: 45.04%Submissions: 138K+Points: 2Average Time: 15m
Given an array, arr of positive integers. Find the third largest element in it. Return -1 if the third largest element is not found.

Examples:

Input: arr[] = [2, 4, 1, 3, 5]
Output: 3
Explanation: The third largest element in the array [2, 4, 1, 3, 5] is 3.
Input: arr[] = [10, 2]
Output: -1
Explanation: There are less than three elements in the array, so the third largest element cannot be determined.
Input: arr[] = [5, 5, 5]
Output: 5
Explanation: In the array [5, 5, 5], the third largest element can be considered 5, as there are no other distinct elements.
Expected Time Complexity: O(n)
Expected Space Complexity: O(1)

sorting:

class Solution {
    int thirdLargest(int arr[]) {
        // Your code here
        int n=arr.length-1;
        Arrays.sort(arr);
        
        return arr[n-2];
    }
}


class GfG {
    static int thirdLargest(int[] arr) {
        int n = arr.length;
        
        // Find the first maximum element.
        int first = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            if (arr[i] > first) first = arr[i];
        }
        
        // Find the second max element.
        int second = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            if (arr[i] > second && arr[i] < first) {
                second = arr[i];
            }
        }
        
        // Find the third largest element.
        int third = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            if (arr[i] > third && arr[i] < second) {
                third = arr[i];
            }
        }
        
        // Return the third largest element 
        return third;
    }



Optimized:

class Solution {
    int thirdLargest(int arr[]) {
        // Your code here
        int first=Integer.MIN_VALUE;
        int second=Integer.MIN_VALUE;
        int third=Integer.MIN_VALUE;
        
        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]>first)
            {
                third=second;
                second=first;
                first=arr[i];
            }
            else if(arr[i]>second)
            {
                third=second;
                second=arr[i];
            }
            else if(arr[i]>third)
            {
                third=arr[i];
            }
        }
        return third;
    }
}

*/}