#=================  beats 64.36% ========================
class Solution:
    def check(self,pattern,value,la,lb):
        dicts = {}
        k = 0
        for c in pattern:
            if c == 'a':
                dicts[value[k:k+la]] = 'a'
                k += la
            else:
                dicts[value[k:k+lb]] = 'b'
                k += lb
        if lb == 0 and len(dicts) == 1:
            return True
        elif (lb > 0 or 'b' in dicts.values()) and len(dicts) == 2:
            return True
        return False
    
    def patternMatching(self, pattern: str, value: str) -> bool:
        Na = pattern.count('a')
        Nb = len(pattern) - Na
        if Na*Nb == (Na+Nb-1) and value != "": #只有1个a或者1个b，同时a,b的数量不为0
            return True
        elif Na*Nb == 0: #字符串只有a或者b的情况
            if value == "": 
                return True
            else:
                Na = max(Na,Nb)
                if Na > 0 and int(len(value)/Na) - len(value)/Na == 0 and self.check('a'*len(pattern),value,len(value)//Na,0) == True:
                    return True
        else: #a和b都存在且数目都大于1
            for la in range(len(value)//Na,0,-1):
                lb = (len(value) - la*Na)/Nb  #Nb要不为0
                if lb - int(lb) != 0:
                    continue 
                lb = int(lb)
                if self.check(pattern,value,la,lb) == True:
                    return True
                
        return False