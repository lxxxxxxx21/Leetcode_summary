# -*- coding: utf-8 -*-
"""
Created on Thu Jun 18 22:50:30 2020

@author: Jianhui_Wang

"""
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def finds(self,S,n):
        #--找到第一次出现的“-”*n，左右必须是数字，找不到返回-1
        x = '-'*n
        for i in range(len(S)-n):
            if S[i:i+n] == x:
                if '0' <= S[i-1] and S[i-1] <= '9' and '0' <= S[i+n] and S[i+n] <= '9':
                    return i
        return -1
    def fun(self,S,D):
        if S == '':
            return None
        index = self.finds(S,D+1)
        if index == -1:
            return TreeNode(int(S))
        else:
            root = TreeNode(int(S[:index]))
            S1 = S[index+1+D:]
            index = self.finds(S1,D+1)
            if index == -1:
                root.left = self.fun(S1,D+1)
                root.right = self.fun('',D+1)
            else:
                S2 = S1[index+1+D:]
                S1 = S1[:index]
                root.left = self.fun(S1,D+1)
                root.right = self.fun(S2,D+1)
        return root
    def recoverFromPreorder(self, S: str) -> TreeNode:
        return self.fun(S,0)