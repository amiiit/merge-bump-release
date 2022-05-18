import {determineBumpType} from "./bump";
import {CommitMessageQueryResponse, MergeCommit} from "./QueryTypes";

const EMPTY_COMMIT_MESSAGE = {
    messageBody: '',
    messageHeadline: '',
}

describe('determine bump', () => {
    it('inputBump overrides everything else', () => {
        expect(determineBumpType(EMPTY_COMMIT_MESSAGE, {
            inputBump: 'minor',
            inferBumpFromCommit: false
        })).toBe('minor')

        expect(determineBumpType(EMPTY_COMMIT_MESSAGE, {
            inputBump: 'patch',
            inferBumpFromCommit: false
        })).toBe('patch')

        expect(determineBumpType(EMPTY_COMMIT_MESSAGE, {
            inputBump: 'major',
            inferBumpFromCommit: false
        })).toBe('major')
    })
    it('inputBump fails on bad inputBump', () => {
        expect(() => determineBumpType(EMPTY_COMMIT_MESSAGE, {
            inputBump: 'invalid',
            inferBumpFromCommit: false
        })).toThrow(`provided input to bump: "invalid", must be one of patch, minor, major.`)
    })
    it('infer from commit. commit ambiguous ', () => {
        expect(determineBumpType({
            messageHeadline: 'lorem ipsum',
            messageBody: '...'
        }, {
            inputBump: '',
            inferBumpFromCommit: true
        })).toBe('patch')
    })
    it('infer from commit. commit clear ', () => {
        expect(determineBumpType({
            messageHeadline: 'minor Added small feature',
            messageBody: '...'
        }, {
            inputBump: '',
            inferBumpFromCommit: true
        })).toBe('minor')

        expect(determineBumpType({
            messageHeadline: 'major Breaking changes ahead',
            messageBody: '...'
        }, {
            inputBump: '',
            inferBumpFromCommit: true
        })).toBe('major')
    })
})