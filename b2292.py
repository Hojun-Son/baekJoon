#숫자 n 이 벌집에서 몇겹째에 있는지 출력하는 문제
n = int(input())
bee_house = 1 #벌집 개수, 1개부터 시작
cnt = 1
while n > bee_house: #n이 bee_house보다 큰 동안에만 반복
    bee_house += 6 * cnt # bee_house는 6의 배수로 증가
    cnt+=1
print(cnt)
