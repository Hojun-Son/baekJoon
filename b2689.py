#달팽이는 올라가고 싶다
import math

a,b,v = map(int, input().split())
day = (v-a)/(a-b)#나무높이(v)에서 마지막 날에 올라간 거리(a)를 뺀 수에서 (a-b)를 나누면 마지막에 a만큼 올라간 하루를 제외한 날짜를 구할 수 있다. 
#유도식 : (a-b)*day+a=v, a만큼 올랐다 b만큼 떨어지기를 반복하기 때문에 a-b의 거리만큼 올라가는 것을 day만큼 반복하고 마지막 날에는 a만큼 올라가고서 더 이상 떨어지지 않음.
print(math.ceil(day)+1) #소수점 방지, a만큼 올라간날 포함해줘야 하므로 +1

# #이렇게 풀면 시간초과 걸림
# a,b,v = map(int, input().split())
# day = 1
# while v > 0 :
#     v-=a
#     if v <= 0 :
#         print(day)
#     else:
#         v+=b
#         day+=1
        
