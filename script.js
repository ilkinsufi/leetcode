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
