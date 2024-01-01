function solution(n, m) {
    let gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    }
    let lcm = (a, b) => (a * b) / gcd(a, b)
    return [gcd(n, m) , lcm(n, m)];
}