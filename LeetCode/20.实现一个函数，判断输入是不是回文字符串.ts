/**
 * 力扣：https://github.com/sisterAn/JavaScript-Algorithms/issues/20
 */
function IsPalindrome(str: string) {
    if (str == null || str.length < 1) return false;
    let left = 0,right = str.length - 1;
    while (left < right) {
        if (str.charAt(left) !== str.charAt(right)) return false
        ++left;
        --right;
    }
    return true
}
