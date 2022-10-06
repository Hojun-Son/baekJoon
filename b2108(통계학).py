import sys
from collections import Counter # 최빈값 구할때

input = sys.stdin.readline
nums = []
N= int(input())
for _ in range(N):
    nums.append(int(input()))
nums.sort()
numbers = Counter(nums).most_common() #가장 많이 나온수가, 가장 작은숫자부터 저장됨

print(round(sum(nums)/len(nums))) #산술평균 출력
idx = len(nums)//2
print(nums[idx]) #중앙값 출력

#최빈값 출력
if len(numbers) > 1 :
    if numbers[0][1] == numbers[1][1]:
        print(numbers[1][0])
    else :
        print(numbers[0][0])
else :
    print(numbers[0][0])
    
#범위출력
print(nums[-1]-nums[0])
