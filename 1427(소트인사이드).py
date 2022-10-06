############################ 권장
import sys
input = sys.stdin.readline

nums = input()
nums = [int(n)  for n in nums]

ordered_nums = sorted(nums, reverse=True)

for n in ordered_nums : 
    print(n, end="")
    
    
##########################내풀이
import sys
input = sys.stdin.readline

N = input()
n_list = []
n_str = ""
for i in range(0, len(N) - 1):
    n_list.append(int(N[i]))
n_list.sort(reverse=True)
for j in range(0, len(N) - 1):
    n_str += str(n_list[j])
print(n_str)
