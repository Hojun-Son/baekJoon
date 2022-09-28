import sys
input = sys.stdin.readline

N,k = int(input()), int(input())
score_list = []
for i in range(N):
	score_list.append(int(input()))
j = 0
score_list.sort(reverse=True)
for score in score_list:
    if j<k:
        print(score)
        j += 1
