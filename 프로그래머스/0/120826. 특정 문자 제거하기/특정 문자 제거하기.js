function solution(my_string, letter) {
    var answer = [...my_string].filter(v => v !== letter)
    return answer.join('');
}