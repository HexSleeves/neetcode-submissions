class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {}
        for (const n of nums){
            freq[n] = (freq[n] ?? 0) + 1
        }

        const arr = Object.entries(freq).map(([num, freq]) => [
            freq,
            parseInt(num),
        ]);
        arr.sort((a, b) => b[0] - a[0]);

        return arr.slice(0, k).map((pair) => pair[1]);
    }
}
