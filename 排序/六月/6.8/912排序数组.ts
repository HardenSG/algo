// 912 排序数组：https://leetcode.cn/problems/sort-an-array/submissions/

function sortArray(nums: number[]) {
    if (nums.length < 2) return nums;

    quickSort(0, nums.length);
    function quickSort(l: number, r: number) {
        if (r - l < 2) return;

        const pivotIndex = partition(nums, l, r);

        // 获取到轴点的index后，以此作为边界，分别处理左右两个序列
        quickSort(l, pivotIndex);
        quickSort(pivotIndex + 1, r);
    }

    return nums;
}

function partition(nums: number[], l: number, r: number) {
    // 由于我们初始的时候传入的是nums.length，所以最后一个是undefined，所以要移动
    r--;
    const random = Math.floor(Math.random() * (r - l)) + l;
    const pivot = nums[random];

    // 先交换轴点到首部，确保在交换的时候（覆盖），不会丢失
    nums[random] = nums[l];
    nums[l] = pivot;

    // 覆盖元素
    while (l < r) {
        // 先从后向前扫描，直到有一个小于轴点的，则覆盖首部的元素
        // 右指针停止到当前的地方
        while (l < r) {
            if (nums[r] > pivot) {
                r--;
            } else {
                nums[l++] = nums[r];
                break;
            }
        }

        // 从前向后扫描，直到有一个大于轴点的，则覆盖右指针位置的元素
        while (l < r) {
            if (nums[l] < pivot) {
                l++;
            } else {
                nums[r--] = nums[l];
                break;
            }
        }
    }

    // 经过上面的覆盖，数组中的元素经过了若干的覆盖之后，已经将轴点覆盖了，因为他是首部第一个被覆盖的元素
    // 所以将轴点覆盖到左边界的地方，此时左右边界相等
    nums[l] = pivot;
    return l;
}

// var sortArray = function(nums) {
//     // 快速排序
//     if (nums.length < 2) return nums;
//     return  quickSort(nums, 0, nums.length - 1);
//   };

//   function quickSort(nums, left, right) {
//       if (left >= right) return;
//       let [leftIndex, rightIndex] = partition(nums, left, right)
//       quickSort(nums, left, leftIndex - 1)
//       quickSort(nums, rightIndex, right)
//       return nums;
//   }

//   var partition = function(nums, leftIndex, rightIndex) {
//     // 三指针法
//     const curr = nums[getRandomIntInclusive(leftIndex, rightIndex)];
//     let index = leftIndex;
//     while(index <= rightIndex) {
//      if(nums[index] < curr) {
//        [nums[leftIndex], nums[index]] =  [nums[index], nums[leftIndex]];
//        leftIndex++;
//        index++;
//        continue;
//      }
//       if(nums[index] === curr){
//         index++;
//         continue;
//       }
//       if(nums[index] > curr) {
//         [nums[rightIndex], nums[index]] =  [nums[index], nums[rightIndex]];
//         rightIndex--;
//       }
//     }
//     return [leftIndex, rightIndex];
//   };

//   function getRandomIntInclusive(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

console.log(sortArray([1, -3]));
