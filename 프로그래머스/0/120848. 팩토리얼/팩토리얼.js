function solution(n) {
    let i = 1
    let fact = 1
    while (fact <= n) {
        i+= 1
        
        fact *= i
    }
    return i - 1
}
