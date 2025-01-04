/**
 * 力扣：https://github.com/sisterAn/JavaScript-Algorithms/issues/6
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2] 输出: [2]
 */
namespace s6 {
    let nums1 = [1, 2, 2, 1],
        nums2 = [2, 2];

    const fn = (n1, n2) => [...new Set(n1.filter((i) => n2.includes(i)))];
    console.log(fn(nums1, nums2));
}
