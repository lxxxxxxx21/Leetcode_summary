# -*- coding: utf-8 -*-
"""
Created on Tue Jun  2 21:17:56 2020

@author: Jianhui_Wang
"""
class Solution:
    def add(self,a):
        self.Sum += a
        return 1
    def sumNums(self, n: int) -> int:
        self.Sum = 0
        a,b = n,n+1
        b&1 and self.add(a)
        a,b= a << 1,b >> 1
        b&1 and self.add(a)
        a,b= a << 1,b >> 1

        b&1 and self.add(a)
        a,b= a << 1,b >> 1
        b&1 and self.add(a)
        a,b= a << 1,b >> 1

        b&1 and self.add(a)
        a,b= a << 1,b >> 1
        b&1 and self.add(a)
        a,b= a << 1,b >> 1

        b&1 and self.add(a)
        a,b= a << 1,b >> 1
        b&1 and self.add(a)
        a,b= a << 1,b >> 1

        b&1 and self.add(a)
        a,b= a << 1,b >> 1
        b&1 and self.add(a)
        a,b= a << 1,b >> 1

        b&1 and self.add(a)
        a,b= a << 1,b >> 1
        b&1 and self.add(a)
        a,b= a << 1,b >> 1
        
        b&1 and self.add(a)
        a,b= a << 1,b >> 1
        b&1 and self.add(a)
        a,b= a << 1,b >> 1
        b&1 and self.add(a)
        a,b= a << 1,b >> 1
        b&1 and self.add(a)
        
        return self.Sum>>1