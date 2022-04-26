# 내 풀이
# word = input()
# cnt=0
# croatia_alphabet=['c-','c=','dz=','d-','lj','nj','s=','z=']
# for i in croatia_alphabet:
#         if i in word:
#             cnt +=word.count(i)
#             #print('i는',i, ' 갯수',cnt)
#             word = word.replace(i,',')
#             #print(word)


# word = word.replace(',','')
# print(cnt+len(word))

word = input()
croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

for i in croatia :
    word = word.replace(i, '*')  # input 변수와 동일한 이름의 변수
print(len(word))
