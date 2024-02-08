/**
 * Takes a changelog (string of markdown) and cuts it off at the given version.
 */
export function cutChangelogAtVersion(changelog: string, targetVersion?: string): string {
  // No version means no cutting
  if (!targetVersion) {
    return changelog;
  }

  const isVersionValid = getIsVersionValid(targetVersion);

  if (!isVersionValid) {
    return changelog;
  }

  // Find the first occurrence of the version when it is used as a heading
  const versionRegex = createVersionRegex(targetVersion);

  const match = versionRegex.exec(changelog);

  if (!match) {
    return changelog;
  }

  // Cut off the changelog at the version
  return changelog.slice(0, match.index);
}

/**
 * Checks if the given version is a valid semver version.
 * Example for a match: "1.2.3" or "1.2.3-beta.1"
 * Reference: https://gist.github.com/jhorsman/62eeea161a13b80e39f5249281e17c39
 */
export function getIsVersionValid(targetVersion: string): boolean {
  const match = targetVersion.match(
    /^([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+)?$/,
  );
  return !!match;
}

/**
 * Creates a regex to match a version in a markdown changelog.
 * This should generate this: /^#+\s*\[(targetVersion)\]|^#+\s*(targetVersion)/gm
 * But with the targetVersion replaced with the actual version number.
 */
function createVersionRegex(version: string): RegExp {
  return new RegExp(`^#+\\s*\\[(${version})\\]|^#+\\s*(${version})`, 'gm');
}

// In-Source-Testing, Reference: https://vitest.dev/guide/in-source
if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe('createVersionRegex', () => {
    it('should return a regex to match a version', () => {
      const version = '1.2.0';

      const regex = createVersionRegex(version);

      expect(regex).toEqual(/^#+\s*\[(1.2.0)\]|^#+\s*(1.2.0)/gm);
    });

    it('should return a regex to match a version with a hyphen', () => {
      const version = '1.2.0-beta.1';

      const regex = createVersionRegex(version);

      expect(regex).toEqual(/^#+\s*\[(1.2.0-beta.1)\]|^#+\s*(1.2.0-beta.1)/gm);
    });

    it('should return a regex to match a version with a hyphen and a dot', () => {
      const version = '1.2.0-beta.1.2';

      const regex = createVersionRegex(version);

      expect(regex).toEqual(/^#+\s*\[(1.2.0-beta.1.2)\]|^#+\s*(1.2.0-beta.1.2)/gm);
    });
  });
}
