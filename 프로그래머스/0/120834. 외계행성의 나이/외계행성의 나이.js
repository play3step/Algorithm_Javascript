function solution(age) {
    let str = 'abcdefghij'
    return Array.from(age.toString()).map(v => str[v]).join('')
}