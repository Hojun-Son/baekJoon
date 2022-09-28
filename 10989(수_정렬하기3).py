import sys
input = sys.stdin.readline

n = int(input())
check_list = [0]*10001
for i in range(n):
	check_list[int(input())] += 1

for num in range(1,10000+1):
    if check_list[num] !=0:
        for _ in range(check_list[num]): #중복 숫자가 들어올 수 있기 때문에
        	print(num)
