type Bump = 'major' | 'minor' | 'patch';

const bump = (version: string, bump: Bump) => {
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

export default bump;
