# -*- coding: utf-8 -*-
"""
Created on Thu Jun  4 14:49:09 2020

@author: Jianhui_Wang
LeetCode ID：34

"""
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if nums == [] or nums[-1]<target: 
            return [-1,-1]
        ans = [-1,-1]
        left,right = 0,len(nums)
        while right > left:
            mid = (right+left)>>1
            if nums[mid] >= target: 
                right = mid
            else: 
                left = mid+1
        if nums[right] != target: #如果该位置的值不为所求的值，那么返回[-1,-1]
                return ans
        ans[0] = right
        if nums[-1] == target:
            ans[1] = len(nums)-1
        else:
            left,right = ans[0],len(nums)
            while right > left:
                mid = (right+left)>>1
                if nums[mid] > target: 
                    right = mid
                else: 
                    left = mid+1
            ans[1] = left-1
        return ans