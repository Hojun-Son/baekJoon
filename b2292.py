#숫자 n 이 벌집에서 몇겹째에 있는지 출력하는 문제
n = int(input())
bee_house = 1
cnt = 1
while n > bee_house:
    bee_house += 6 * cnt
    cnt+=1
print(cnt)
