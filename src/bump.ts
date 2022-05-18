import {CommitMessageQueryResponse, MergeCommit} from "./QueryTypes";

export type Bump = 'major' | 'minor' | 'patch';

export const bump = (version: string, bump: Bump) => {
    const cleanVersionMatcher = version.match(/.*(\d+\.\d+\.\d+).*/);
    if (cleanVersionMatcher == null || cleanVersionMatcher[1] === null) {
        throw new Error(`invalid semver: ${version}`)
    }
    const cleanVersion = cleanVersionMatcher[1];
    const parts = cleanVersion.split('.').map((p) => parseInt(p));
    if (bump === 'patch') {
        parts[2]++;
    } else if (bump === 'minor') {
        parts[1]++;
        parts[2] = 0;
    } else if (bump === 'major') {
        parts[0]++;
        parts[1] = parts[2] = 0;
    }
    return parts.join('.');
};

type DetermineBumpTypeOptions = {
    inputBump: string,
    inferBumpFromCommit: boolean
}

const inferBumpFromCommit = (commit: MergeCommit): Bump => {
    const firstWordMatch = /(\w+)\b.*/.exec(commit.messageHeadline)
    if (firstWordMatch) {
        const firstWord = firstWordMatch[1].toLowerCase()
        if (BUMPS.includes(firstWord)) {
            return firstWord as Bump
        }
    }
    return 'patch'
}

const BUMPS: string[] = ['patch','minor','major']
export const determineBumpType = (commit: MergeCommit, options: DetermineBumpTypeOptions): Bump => {
    if (options.inputBump) {
        if (!BUMPS.includes(options.inputBump.toLowerCase() as Bump)) {
            throw `provided input to bump: "${options.inputBump}", must be one of patch, minor, major.`
        } else {
            return options.inputBump.toLowerCase() as Bump
        }
    }

    if (options.inferBumpFromCommit) {
        return inferBumpFromCommit(commit)
    }

    return 'patch'
}