{/*
   Pair Sum in a Sorted and Rotated Array

Given an array of positive elements arr[] that is sorted and then rotated around an unknown point, the task is to check if the array has a pair with sum equals to a given target.

Examples:

Input: arr[] = [7, 9, 1, 3, 5], target = 6
Output: true
Explanation: arr[2] and arr[4] has sum equals to 6 which is equal to the target.
Input: arr[] = [2, 3, 4, 1], target = 3
Output: true
Explanation: arr[0] and arr[3] has sum equals to 3 which is equal to the target.
Input: arr[] = [10, 7, 4, 1], target = 9
Output: false
Explanation: There is no such pair exists in arr[] which sums to target.

BruteFOrce:

class Solution {
    static boolean pairInSortedRotated(int arr[], int target) {
        // Your code here
        int n=arr.length;
        for(int i=0;i<n;i++)
        {
            for(int j=i+1;j<n;j++)
            {
                if(arr[i]+arr[j]==target)
                {
                    return true;
                   
                }
            }
        }
        return false;
    }
}


Using HashSet:

class GfG {
    static boolean pairInSortedRotated(int[] arr, int target){
        HashSet<Integer> set = new HashSet<>();
        for (int i = 0; i < arr.length; i++) {

            // Calculate the complement that added to
            // arr[i], equals the target
            int complement = target - arr[i];

            // Check if the complement exists in the set
            if (set.contains(complement)) {
                return true;
            }

            // Add the current element to the set
            set.add(arr[i]);
        }
        
        // If no pair is found
        return false;
    }
}


Using Two Pointers:'
// Java program to find a Pair Sum in a Sorted 
// and Rotated Array using Two Pointer Technique

class GfG {
    static boolean pairInSortedRotated(int[] arr, int target) {
        int n = arr.length;

        // Find the pivot element
        int i;
        for (i = 0; i < n - 1; i++)
            if (arr[i] > arr[i + 1])
                break;

        // l is now index of smallest element
        int l = (i + 1) % n;

        // r is now index of largest element
        int r = i;

        // Keep moving either l or r till they meet
        while (l != r) {

            // If we find a pair with sum target, return true
            if (arr[l] + arr[r] == target)
                return true;

            // If current pair sum is less, move to higher sum
            if (arr[l] + arr[r] < target)
                l = (l + 1) % n;

            // Move to lower sum side
            else
                r = (r - 1 + n) % n;
        }
        return false;
    }

    public static void main(String[] args) {
        int[] arr = {11, 15, 6, 8, 9, 10};
        int target = 16;
        if (pairInSortedRotated(arr, target))
            System.out.println("true");
        else
            System.out.println("false");
    }
}


*/}