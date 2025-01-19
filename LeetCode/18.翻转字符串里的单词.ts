/**
 * 力扣：https://leetcode.cn/problems/reverse-words-in-a-string/description/
 */

function reverseWords(s: string): string {
    return s.trim().split(" ").reverse().filter((s) => s.trim()).join(" ")
}

console.log(reverseWords("a good   example"));
