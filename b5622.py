#다이얼

word = input()

dial = ['ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ']

sec = 0
for i in range(len(word)):
    for j in dial:
        if word[i] in j:
            sec += dial.index(j)+3 #1번이 2초, 2번(인덱스:0)은 3초, 3번(인덱스:1)은 4초... -> 인덱스+3초
print(sec)
