class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const s1 = s.split('').sort()
        const t1 = t.split('').sort()

        console.log(s1,t1)

        return JSON.stringify(s1) === JSON.stringify(t1)
    }
}
