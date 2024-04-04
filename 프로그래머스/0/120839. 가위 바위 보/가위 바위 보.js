function solution(rsp) {

    return [...rsp].map( n => n === '2' ? '0' : n === '0' ?  '5' : '2').join('');
}