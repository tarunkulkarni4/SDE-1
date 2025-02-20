{/*
Sort 0s, 1s and 2s

Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.

You need to solve this problem without utilizing the built-in sort function.

Examples:

Input: arr[] = [0, 1, 2, 0, 1, 2]
Output: [0, 0, 1, 1, 2, 2]
Explanation: 0s 1s and 2s are segregated into ascending order.
Input: arr[] = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
Explanation: 0s 1s and 2s are segregated into ascending order.

Follow up: Could you come up with a one-pass algorithm using only constant extra space?

    BruteForce:
    class GfG {
  
    // Function to sort the array of 0s, 1s and 2s
    static void sort012(int[] arr) {
        int n = arr.length;
        int c0 = 0, c1 = 0, c2 = 0;

        // Count 0s, 1s and 2s
        for (int i = 0; i < n; i++) {
            if (arr[i] == 0) 
                c0 += 1;
            else if (arr[i] == 1) 
                c1 += 1;
            else 
                c2 += 1;
        }

        int idx = 0;
      
        // Place all the 0s
        for (int i = 0; i < c0; i++)
            arr[idx++] = 0;

        // Place all the 1s
        for (int i = 0; i < c1; i++)
            arr[idx++] = 1;

        // Place all the 2s
        for (int i = 0; i < c2; i++)
            arr[idx++] = 2;
    }
}


Using three pointers:

class Solution {
    // Function to sort an array of 0s, 1s, and 2s
    public void sort012(int[] arr) {
        // Initialize pointers
        int start = 0;   // Pointer for 0s
        int mid = 0;     // Pointer to traverse through the array
        int high = arr.length - 1;  // Pointer for 2s
        
        // Process array elements
        while (mid <= high) {
            switch (arr[mid]) {
                case 0: 
                    swap(arr, start, mid);  // Swap 0 to the beginning
                    start++;                // Move start pointer
                    mid++;                  // Move mid pointer
                    break;
                case 1: 
                    mid++;                  // Move mid pointer
                    break;
                case 2:
                    swap(arr, mid, high);  // Swap 2 to the end
                    high--;                // Move high pointer
                    break;
            }
        }
    }
    
    // Swap elements at index i and j
    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}


Using sorting:

class Solution {
    // Function to sort an array of 0s, 1s, and 2s
    public void sort012(int[] arr) {
        // code here
      Arrays.sort(arr);
    }
}
*/}