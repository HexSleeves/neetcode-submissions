class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const len = nums.length

        // // Brute Force
        // for (let i = 0; i < len; i++){
        //     for (let j = i + 1; j < len; j++){
        //         if (nums[i] + nums[j] === target){
        //             return [i,j]
        //         }
        //     }
        // }

        // return false

        // Hashmap
        const numMap = new Map()
        for (let i = 0; i < len; i++){
            const num = nums[i]
            const compliment = target - num

            if (numMap.has(compliment)){
                return [i, numMap.get(compliment)]
            }

            numMap.set(num, i)
        }

        return false
    }
}
