# 손익분기점
a,b,c = map(int, input().split(' '))

def fn(a,b,c) :
    if b>=c: # A+B*n = C*n 일 떄 수입과 비용이 같아짐 -> B>=C일 경우에 손익분기점이 존재하지 않으므로 걸러줌
        return -1
    else:
        return (int(a/(c-b)+1)) #A/(C-B)생산했을 때 수입과 비용이 같아지므로 그다음(+1)부터 수입이 비용보다 커짐
print(fn(a,b,c))        
