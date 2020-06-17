# -*- coding: utf-8 -*-
"""
Created on Wed Jun 17 14:12:37 2020

@author: Jianhui_Wang
执行用时 : 604 ms, 在所有 Python3 提交中击败了65.79%的用户
内存消耗 :19 MB, 在所有 Python3 提交中击败了9.09%的用户
"""

class Solution:
    def maxScoreSightseeingPair(self, A: List[int]) -> int:
        max_value = 0
        current = A[0]
        for j in range(1, len(A)):
            max_value = max(max_value, current + A[j] - j)
            current = max(current, A[j] + j)   
        return max_value