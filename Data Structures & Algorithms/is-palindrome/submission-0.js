class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const stripped = s.replace(/[\W_]/g, '').toLocaleLowerCase();
        const rev = stripped.split('').reverse().join('')
        return stripped === rev
    }
}
