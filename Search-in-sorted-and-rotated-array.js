{/*

    Search in a Sorted and Rotated Array
Last Updated : 07 Dec, 2024
Given a sorted and rotated array arr[] of n distinct elements, the task is to find the index of given key in the array. If the key is not present in the array, return -1.

Examples:  

Input: arr[] = [5, 6, 7, 8, 9, 10, 1, 2, 3], key = 3
Output: 8
Explanation: 3 is present at index 8 in arr[].


Input: arr[] = [3, 5, 1, 2], key = 6
Output: -1
Explanation: 6 is not present in arr[].


Input: arr[] = [33, 42, 72, 99], key = 42
Output: 1
Explanation: 42 is found at index 1.

Naive Apprroach:


class Solution {
    int search(int[] arr, int key) {
        // Complete this function
        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]==key)
            {
                return i;
            }
        }
        return -1;
    }
}

Using single Binary search 

class Solution {
    int search(int[] arr, int key) {
        // Complete this function
       int low=0;
       int high=arr.length-1;
       
       while(low<=high)
       {
           int mid=(low+high)/2;
           if(arr[mid]==key)
           {
               return mid;
           }
           
           if(arr[low]<=arr[mid])
           {
               if(arr[low]<=key && key<arr[mid])
               {
                   high=mid-1;
               }
               else{
                   low=mid+1;               
                   
               }
           }
           else{
               if(arr[mid]<key && key <=arr[high])
               {
                   low=mid+1;
               }
               else{
                   high=mid-1;
               }
           }
       
       }
           return -1;
    }
}

*/}