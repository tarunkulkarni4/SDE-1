{/*
    Single Among Doubles in a Sorted
Difficulty: MediumAccuracy: 55.54%Submissions: 98K+Points: 4
Given a sorted array arr[]. Find the element that appears only once in the array. All other elements appear exactly twice. 

You solution must run in O(log n) time and O(1) space.

Examples :

Input: arr[] = [1, 1, 2, 2, 3, 3, 4, 50, 50, 65, 65]
Output: 4
Explanation: 4 is the only element that appears exactly once.
Input: arr[] = [5]
Output: 5
Input: arr[] = [1, 2, 2, 3, 3]
Output: 1
Constraints:

Naive Approach;

lass GfG {

    static int single(int[] arr) {
        int n = arr.length;

        // Since every other element appears twice,
        // the single element must be at an odd
        // position
        for (int i = 0; i < n - 1; i += 2) {
            if (arr[i] != arr[i + 1]) {
                return arr[i];
            }
        }

        // If no element found, the 
        // single element must be 
        // the last one
        return arr[n - 1];
    }
}

Using Xor:

class GfG {

    // A XOR based function to find
    // the element that appears only once
    static int single(int[] arr) {
        int XOR = 0;
        for (int i = 0; i < arr.length; i++) {
            XOR ^= arr[i];
        }
        return XOR;
    }
}

Using BinarySearch:

class GfG {

    static int single(int[] arr) {
        int lo = 0, hi = arr.length - 1;
        
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            
            // Ensure mid is even
            if (mid % 2 == 1)
                mid--;
            
            // If repeating element is at even position, 
            // then single element must be on the right side
            if (arr[mid] == arr[mid + 1]) {
                lo = mid + 2;
            } 
          
            // Else single element must be on the left  
            else {
                hi = mid;
            }
        }
        
        return arr[lo];
    }
}
*/}