# 소수
m = int(input())
n = int(input())
sosu_list=[]
for x in range(m,n+1):
    error = 0
    if x == 1:
        continue
    for a in range(2,x):
        if x%a==0: 
            error +=1 
    if error == 0:
        sosu_list.append(x)
if sosu_list==[]:
    print(-1) #소수 없으면 -1출력
else:
    print(sum(sosu_list))
    print(sosu_list[0])
        
# 다른사람 풀이
# M=int(input())
# N=int(input())
# arr=[]

# for i in range(M,N+1):
#     if i==1:
#         pass
#     elif i==2:
#         arr.append(i)
#     else:
#         for j in range(2, i):
#             if i%j==0:
#                 break
#             elif j==i-1:
#                 arr.append(i)
# if len(arr)==0:
#     print('-1')
# else:
#     print(sum(arr))
#     print(min(arr))
