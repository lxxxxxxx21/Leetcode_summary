# -*- coding: utf-8 -*-
"""
Created on Tue Jun 16 22:05:15 2020

@author: Jianhui_Wang
执行用时 : 152 ms, 在所有 Python3 提交中击败了74.40% 的用户
内存消耗 :26 MB, 在所有 Python3 提交中击败了12.50% 的用户
"""
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        res = []
        floor = [root]
        i = 0
        while True:
            nextfoor,k = [],0
            for node in floor:
                if node == None:
                    res.append(None)
                    k += 1
                else:
                    res.append(node.val)
                    i = len(res) #记录最后一个数字出现的位置
                    nextfoor.extend([node.left,node.right])
                
            if k == len(nextfoor):
                break
            floor = nextfoor
        return str(res[:i])
    def deserialize(self, data):
        """Decodes your encoded data to tree.
        :type data: str
        :rtype: TreeNode
        """
        data = eval(data)
        length = len(data)
        k = 0
        root = []
        while k < length:
            if k == 0:
                root = TreeNode(data[k])
                k += 1
                floor = [root]
            else:
                nextfloor = []
                for node in floor:
                    if node != None:
                        if data[k] == None:
                            node.left = data[k]
                        else:
                            node.left =  TreeNode(data[k])
                        k += 1
                        nextfloor.append(node.left)
                        if k >= length:
                            return root
                        if data[k] == None:
                            node.right = data[k]
                        else:
                            node.right = TreeNode(data[k])
                        nextfloor.append(node.right)
                        k += 1
                        if k >= length:
                            return root
                    
                        floor = nextfloor
        
        return root

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.deserialize(codec.serialize(root))