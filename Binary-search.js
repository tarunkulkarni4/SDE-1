{/*Binary Search
Difficulty: EasyAccuracy: 44.32%Submissions: 561K+Points: 2Average Time: 20m
Given a sorted array arr and an integer k, find the position(0-based indexing) at which k is present in the array using binary search.

Note: If multiple occurrences are there, please return the smallest index.

Examples:

Input: arr[] = [1, 2, 3, 4, 5], k = 4
Output: 3
Explanation: 4 appears at index 3.
Input: arr[] = [11, 22, 33, 44, 55], k = 445
Output: -1
Explanation: 445 is not present.
Input: arr[] = [1, 1, 1, 1, 2], k = 1
Output: 0
Explanation: 1 appears at index 0.
Note: Try to solve this problem in constant space i.e O(1)

Constraints:
1 <= arr.size() <= 105
1 <= arr[i] <= 106
1 <= k <= 106


Solution:

class Solution {
    public int Binary-search(int[] arr, int k) {
        int start = 0;
        int end = arr.length - 1;
        int result = -1; // Variable to store the result

        while (start <= end) {
            int mid = start + (end - start) / 2;  // Calculate the middle index

            // If the target is found, update result and search for the smallest index
            if (arr[mid] == k) {
                result = mid;   // Found k, update the result
                end = mid - 1;  // Continue searching to the left to find the smallest index
            }
            // If k is greater, ignore the left half
            else if (arr[mid] < k) {
                start = mid + 1;
            }
            // If k is smaller, ignore the right half
            else {
                end = mid - 1;
            }
        }

        return result;  // If found, return the smallest index; otherwise, return -1
    }
}
*/}