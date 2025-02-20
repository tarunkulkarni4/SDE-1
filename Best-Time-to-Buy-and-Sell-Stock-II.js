{/*

    Stock Buy and Sell – Multiple Transaction Allowed

The cost of stock on each day is given in an array price[]. Each day you may decide to either buy or sell the stock i at price[i], you can even buy and sell the stock on the same day. Find the maximum profit that you can get.

Note: A stock can only be sold if it has been bought previously and multiple stocks cannot be held on any given day.

Examples:

Input: prices[] = [100, 180, 260, 310, 40, 535, 695]
Output: 865
Explanation: Buy the stock on day 0 and sell it on day 3 => 310 – 100 = 210. Buy the stock on day 4 and sell it on day 6 => 695 – 40 = 655. Maximum Profit = 210 + 655 = 865.


Input: prices[] = [4, 2, 2, 2, 4]
Output: 2
Explanation: Buy the stock on day 3 and sell it on day 4 => 4 – 2 = 2. Maximum Profit = 2.

BruteFORce:

class GfG {
  
    // Function to find the maximum profit
    static int maxProfitRec(int[] price, int start, int end) {
        int res = 0;

        // Consider every valid pair, find the profit with it
        // and recursively find profits on left and right of it
        for (int i = start; i < end; i++) {
            for (int j = i + 1; j <= end; j++) {
                if (price[j] > price[i]) {
                    int curr = (price[j] - price[i]) + 
                                maxProfitRec(price, start, i - 1) + 
                                maxProfitRec(price, j + 1, end);
                    res = Math.max(res, curr);
                }
            }
        }
        return res;
    }
}

Optimized:

// User function Template for Java
class Solution {
    public int maximumProfit(int prices[]) {
        // code here
        int maxp=0;
        for(int i=1;i<prices.length;i++)
        {
            if(prices[i]>prices[i-1])
            {
                maxp+=prices[i]-prices[i-1];
            }
        }
        return maxp;
    }
}
*/}