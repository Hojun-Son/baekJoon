###########################내 풀이
import sys

input = sys.stdin.readline

N = int(input())
coordinate_list = []
for _ in range(0, N):
    coordinate_list.append(list(map(int, input().split(" "))))
coordinate_list.sort()
for i in range(0, len(coordinate_list)):
    for j in coordinate_list[i]:
        print(j, end=" ")
    print("")
############################# 수정
import sys

input = sys.stdin.readline

N = int(input())
coordinate_list = []
for _ in range(0, N):
    coordinate_list.append(list(map(int, input().split(" "))))
coordinate_list.sort()
for i in range(0, len(coordinate_list)):
    print(coordinate_list[i][0], coordinate_list[i][1]) ####for문 안쓰는게 

