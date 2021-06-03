const strReverse = require('../str_reverse.js');

describe('test strRevetse function', () => {
    it('reverse asdfg to gfdsa', () => {
        const  test_str = 'asdfg'
        expect(strReverse(test_str)).toBe('gfdsa')
    })
});