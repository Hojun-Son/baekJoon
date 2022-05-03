#ACM호텔
#권장 풀이
t = int(input())
for i in range(t):
    h, w, n = map(int, input().split())
    num = n//h + 1 #해당 손님이 몇 호에 머물지는 N에서 H를 나눈 몫+1과 같다.
    floor = n % h #해당 손님이 몇 층에 머물지는 N에서 H를 나누고 남은 나머지와 같다.
    if n % h == 0:  # eg. 6층짜리 호텔에 6,12,18번째 손님이 들어오는 경우에는,
        num = n//h #n/h호
        floor = h # h 층
    print(f'{floor*100+num}')
    
#내 풀이
# t = int(input())
# rooms=[]
# room_num = ''
# for i in range(t):
#     h,w,n = map(int, input().split())
#     for j in range(1,w+1):
#         for k in range(1,h+1):
#             room_num = str(k)+str(j).zfill(2) #zfill(i) i자리수 맞춰서 0 채워줌
#             rooms.append(room_num)
#     print(rooms[n-1])
#     rooms=[] #다시입력 받아야 하므로 초기화 해주기
