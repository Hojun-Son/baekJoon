#ACM호텔
t = int(input())
rooms=[]
room_num = ''
for i in range(t):
    h,w,n = map(int, input().split())
    for j in range(1,w+1):
        for k in range(1,h+1):
            room_num = str(k)+str(j).zfill(2) #zfill(i) i자리수 맞춰서 0 채워줌
            rooms.append(room_num)
    print(rooms[n-1])
    rooms=[] #다시입력 받아야 하므로 초기화 해주기
