// 1. Two Sum
// let twoSum = function (nums, target) {
//   let indices = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         indices.push(i, j);
//         break;
//       }
//     }
//   }

//  return indices;
// };

// 14.Longest Common Prefix
// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) {
//     return "";
//   }

//   strs.sort();

//   const firstStr = strs[0];
//   const lastStr = strs[strs.length - 1];

//   let i = 0;
//   while (i < firstStr.length && firstStr[i] === lastStr[i]) {
//     i++;
//   }

//   return firstStr.substring(0, i);
// };

// 20. Valid Parentheses
// var isValid = function (s) {
//   let stack = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
//       stack.push(s[i]);
//     } else if (stack.length === 0) {
//       return false;
//     } else {
//       if (
//         (s[i] === ")" && stack[stack.length - 1] === "(") ||
//         (s[i] === "}" && stack[stack.length - 1] === "{") ||
//         (s[i] === "]" && stack[stack.length - 1] === "[")
//       ) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// };

// isValid("()[]{}");

// 28. Find the Index of the First Occurrence in a String
// var strStr = function (haystack, needle) {
//   return haystack.indexOf(needle);
// };

// strStr("sadbutsad", "sad");

// 58. Length of Last Word
// var lengthOfLastWord = function (s) {
//     let length = 0;
//     let i = s.length - 1;

//     while (i >= 0 && s[i] === ' ') {
//         i--;
//     }

//     while (i >= 0 && s[i] !== ' ') {
//         length++;
//         i--;
//     }

//     return length;
// };

// 145. Binary Tree Postorder Traversal
// var postorderTraversal = function (root) {
//   let result = [];

//   const traverse = (node) => {
//     if (node !== null) {
//       traverse(node.left);

//       traverse(node.right);

//       result.push(node.val);
//     }
//   };

//   traverse(root);

//   return result;
// };

//
// var addDigits = function(num) {
//     return(num.toString().split('').map(Number).reduce((a, b) => a + b).toString().split('').map(Number).reduce((a, b) => a + b));
// };

// addDigits(38);

// 283. Move Zeroes
// var moveZeroes = function (nums) {
//   console.log(nums);
//   withoutZero = nums.filter((num) => num === 0);
//   console.log(withoutZero);

//   for (let i = 0; i < withoutZero.length; i++) {
//     nums.splice(nums.indexOf(0), 1);
//     nums.push(0);
//   }
//   console.log(nums);
// };
// moveZeroes([0, 1, 0, 3, 12]);

// 268. Missing Number

//var missingNumber = function (nums) {
//  const maksimum = Math.max(...nums);
//  for (let i = 0; i <= maxNum; i++) {
//    if (!nums.includes(i)) {
//      return i;
//    }
//  }
//  return maxNum + 1;
//};
//missingNumber([3, 0, 1]);

// 88. Merge Sorted Array
var merge = function (nums1, m, nums2, n) {
  let newArr1 = [];
  let newArr2 = [];

  for (let i = 0; i < m; i++) {
    newArr1.push(nums1[i]);
  }
  for (let i = 0; i < n; i++) {
    newArr2.push(nums2[i]);
  }

  let finalArray = [...newArr1, ...newArr2];
  finalArray.sort((a, b) => a - b);

  for (let i = 0; i < finalArray.length; i++) {
    nums1[i] = finalArray[i];
  }

  console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
