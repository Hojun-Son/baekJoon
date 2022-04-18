s = input()
alphabet = list(range(97,123)) #97부터 122까지는 아스키코드표 상에서 a~z
for i in alphabet :
    print(s.find(chr(i)))
