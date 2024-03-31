function solution(n) {
    
    var answer = 0;
    for (let k = 0; k <= n; k++){
        if (k % 2 === 0 ){
            answer += k
        }
    }
    return answer;
}