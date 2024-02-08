import { describe, expect, it } from 'vitest';
import { cutChangelogAtVersion, getIsVersionValid } from './Changelog.utils';

const changelog = '## 1.2.0\n\n### Added\n- New feature\n\n## 1.1.0\n\n### Fixed\n- Bug';

describe('Changelog.utils', () => {
  describe('cutChangeLogAtVersion', () => {
    it('should return the full changelog if no version is given', () => {
      const result = cutChangelogAtVersion(changelog, '');

      expect(result).toBe(changelog);
    });

    it('should return the full changelog if the version is not found', () => {
      const result = cutChangelogAtVersion(changelog, '1.0.0');

      expect(result).toBe(changelog);
    });

    it('should return the changelog up to the version', () => {
      const result = cutChangelogAtVersion(changelog, '1.1.0');

      expect(result).toBe('## 1.2.0\n\n### Added\n- New feature\n\n');
    });
  });

  describe('getIsVersionValid', () => {
    it('should return true for a valid version', () => {
      const result = getIsVersionValid('1.2.0');

      expect(result).toBe(true);
    });

    it('should return false for an invalid version', () => {
      const result = getIsVersionValid('1.2');

      expect(result).toBe(false);
    });
  });
});
