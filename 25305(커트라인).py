import sys
input = sys.stdin.readline

n,k = map(int,input().split())
print(sorted(map(int,input().split()), reverse=True)[k-1])






##################################내 풀이

N,k = map(int, input().split())
score_list = []
score_list += map(int, input().split())

j = 0
score_list.sort(reverse=True)
for score in score_list:
    if j<k:
        j += 1
        if j == k :
            print(score)
