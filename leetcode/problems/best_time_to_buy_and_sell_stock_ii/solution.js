/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var max = 0;
    for (var i = 0; i < prices.length-1; i++){
        if (prices[i+1] > prices[i]) max += (prices[i+1] - prices[i]);
    }
    return max;
};