# -*- coding: utf-8 -*-
"""
Created on Wed Jun  3 16:49:33 2020

@author: Jianhui_Wang
"""
class Solution:
    def new21Game(self, N: int, K: int, W: int) -> float:
        #Sum >= K endpoint || Search range = [1,W] || calcuate prob(Sum<=N)
        dp = [0]*(N+W) #创建一个N+W长度的list
        dp[K:N + 1] = [1.0]*(N+1-K)
        sumdp = min(N-K+1,W)
        for i in range(K-1,-1,-1):
            dp[i] = sumdp/W
            sumdp = sumdp + dp[i]-dp[i+W]
        return dp[0]
    
if __name__ == "__main__":
    N= 9632
    K= 6575
    W= 5602
    print(Solution().new21Game(N, K, W))
