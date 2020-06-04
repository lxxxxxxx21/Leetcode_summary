# -*- coding: utf-8 -*-
"""
Created on Thu Jun  4 15:56:29 2020

@author: Jianhui_Wang

Solution of Leetcode-852
"""
class Solution:
    def peakIndexInMountainArray(self, A: List[int]) -> int:
        if len(A) <3: return 0
        left,right = 0,len(A)
        while right > left:
            mid = (left+right)>>1
            if A[mid-1]<A[mid] and A[mid]>A[mid+1]:
                return mid
            elif A[mid-1]<A[mid] and A[mid+1] > A[mid]:#up
                left = mid
            elif A[mid-1]>A[mid] and A[mid] > A[mid+1]:#down
                right = mid