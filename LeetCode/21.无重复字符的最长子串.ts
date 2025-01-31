/**
 * 求解：无重复字符的最长子串;
 * 力扣：https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 * 链表技巧：递归、虚拟节点、双指针
 * 思路：滑动窗口
 */
function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0;
    let left = 0;
    const charSet = new Set(); // 窗口
    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);// 每一次滑动都会比较一次最大长度
    }
    return maxLength
}

console.log(lengthOfLongestSubstring("abcabcbb"));
