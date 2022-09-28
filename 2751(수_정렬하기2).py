import sys
input=sys.stdin.readline
##################################백준에서 이거 안쓰면 시간초과 뜸

##알고리즘 : 병합정렬##

n=int(input())
unsorted_list = []
for _ in range(0,n):
    unsorted_list.append(int(input()))
    
def merge(left_,right_):
    sorted_list = []
    i,j=0,0
    while i<len(left_) and j<len(right_):
        if left_[i] < right_[j]:
            sorted_list.append(left_[i])
            i+=1
        else :
            sorted_list.append(right_[j])
            j+=1
    while i<len(left_):
        sorted_list.append(left_[i])
        i+=1
    while j<len(right_):
        sorted_list.append(right_[j])
        j+=1
    return sorted_list

def merge_sort(unsorted_list):
    if len(unsorted_list) <= 1:
        return unsorted_list
    mid = len(unsorted_list)//2
    left = unsorted_list[:mid]
    right = unsorted_list[mid:]
    left_ = merge_sort(left)
    right_ = merge_sort(right)
    return merge(left_,right_)



answer = merge_sort(unsorted_list)

for m in answer:
    print(m)
