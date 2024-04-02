function solution(num_list) {
    var answer = [];
    answer[0] = 0
    answer[1] = 0
    num_list.map((n)=> n % 2 === 0 ? answer[0]++ : answer[1]++)
    return answer;
}