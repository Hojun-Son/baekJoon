#달팽이는 올라가고 싶다
import math

a,b,v = map(int, input().split())
day = (v-a)/(a-b) #(a-b)*day+a=v
print(math.ceil(day)+1)

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
        
