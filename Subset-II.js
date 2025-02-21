{/*

    Subset II
Difficulty: MediumAccuracy: 50.0%Submissions: 11K+Points: 4Average Time: 30m
You are given an integer array nums that may contain duplicates. Your task is to return all possible subsets. Return only unique subsets and they can be in any order.

Note: The individual subsets should be sorted.

Example:

Input: 
nums = [1,2,2] 
Output: 
[[],[1],[1,2],[1,2,2],[2],[2,2]]
Explanation: 
We can have subsets ranging from length 0 to 3. which are listed above. Also the subset [1,2] appears twice but is printed only once as we require only unique subsets.
Your Task:
Complete the function vector> printUniqueSubset(), which takes  a vector nums and return a vector of vector consisting of all unique subsets.

Expected Time Complexity: O(2N).
Expected Auxiliary Space: O(2N).

using BackTracking:


class Solution {
    public static ArrayList<ArrayList<Integer>> printUniqueSubsets(int[] nums) {
        ArrayList<ArrayList<Integer>>result=new ArrayList<>();
        Arrays.sort(nums);
        backTrack(result,new ArrayList<>(),nums,0);
        return result;
    }
    
    private static void backTrack(  ArrayList<ArrayList<Integer>>result,List<Integer>temp,int[] nums,int start)
    {
        result.add(new ArrayList<>(temp));
        for(int i=start;i<nums.length;i++)
        {
              if (i > start && nums[i] == nums[i - 1]) {
                continue;
            }
            temp.add(nums[i]);
            backTrack(result,temp,nums,i+1);
            temp.remove(temp.size()-1);
        }
    }
}
*/}