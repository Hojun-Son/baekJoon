//베르트랑 공준
while true {
    var cnt = 0
    let N = Int(readLine()!)!
    if N == 0 {
        break
    }else if N == 1 {
        print("1")
        continue
    }
	

	var arr = [Int](repeating: 0, count: 2 * N + 1 )

	for i in 2...2 * N {
		arr[i] = i
	}

	for j in 2...2 * N {
		if arr[j] == 0 {continue}
		for k in stride(from: j+j, through: 2 * N, by: j) {
			arr[k] = 0
		}
	}

	for c in N + 1...2 * N {
		if arr[c] != 0 {
			cnt += 1
		}
	}
	print("\(cnt)")
}
