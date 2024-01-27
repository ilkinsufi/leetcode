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

//   return indices;
// };

// 14. Longest Common Prefix
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
