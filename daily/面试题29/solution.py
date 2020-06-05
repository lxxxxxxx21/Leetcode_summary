# -*- coding: utf-8 -*-
"""
Created on Fri Jun  5 11:12:42 2020

@author: Jianhui_Wang
------------------------------------------------------------------
          Solution of Leetcodde-面试题29 顺时针打印矩阵
==================================================================
执行时间: 40 ms, Python3,击败了94.55%的用户
内存使用: 13.7 MB,在所有 Python3 提交中击败了100.00%的用户
==================================================================
"""
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        if len(matrix) == 0: return matrix
        high,width = len(matrix),len(matrix[0])
        Nnum = high*width
        result = []
        x,y = 0,0
        while len(result) < Nnum:
            for iy in range(width): #打印上边框数据
                result.append(matrix[x][y+iy])
            for ix in range(1,high): #打印右边框数据
                result.append(matrix[x+ix][y+width-1])
            if high > 1:
                for ix in range(width-2,-1,-1):#打印下边框数据
                    result.append(matrix[x+high -1][x+ix])
            if width > 1:
                for iy in range(high - 2,0,-1):#打印左边框数据
                    result.append(matrix[x+iy][y])
            x += 1
            y += 1
            width -= 2
            high -= 2
        return result
if __name__ == "__main__":
    print(Solution().spiralOrder(matrix))