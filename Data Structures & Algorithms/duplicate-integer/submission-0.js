class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freqMap = {}

        for(const num of nums){
            if (freqMap[num]) return true
            freqMap[num] = true
        }

        return false
    }
}
