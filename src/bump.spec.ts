import {bump} from './bump'

describe('bump', () => {
    it('bump minor', () => {
        expect(bump('1.2.3', 'patch')).toEqual('1.2.4')
        expect(bump('1.2.3', 'minor')).toEqual('1.3.0')
        expect(bump('1.2.3', 'major')).toEqual('2.0.0')
        expect(bump('v1.2.3', 'major')).toEqual('2.0.0')
        expect(bump('v1.2.3', 'minor')).toEqual('1.3.0')
        expect(bump('v1.2.3--alpha3', 'minor')).toEqual('1.3.0')
        expect(() => bump('v1.2', 'patch')).toThrow('invalid semver: v1.2')
    })

})
