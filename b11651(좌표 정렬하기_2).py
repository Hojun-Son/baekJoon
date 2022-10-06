import sys

input = sys.stdin.readline

N = int(input())
coordinate_list = []
for _ in range(0, N):
    temp_list = list(map(int, input().split(" ")))
    reversed_list = reversed(temp_list)
    coordinate_list.append(list(reversed_list))

coordinate_list.sort()
for i in range(0, len(coordinate_list)):
    print(coordinate_list[i][1], coordinate_list[i][0])
