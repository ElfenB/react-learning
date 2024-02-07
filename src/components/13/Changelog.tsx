import type { AnchorHTMLAttributes } from 'react';
import { useEffect, useMemo, useState } from 'react';

import type { SxProps, Theme } from '@mui/material';
import { Box } from '@mui/material';

import Markdown from 'react-markdown';
import { cutChangelogAtVersion } from './Changelog.utils';
// https://github.com/remarkjs/react-markdown/issues/100#issuecomment-504505123
import 'github-markdown-css';

type Props = {
  cutOff?: string;
  sx?: SxProps<Theme>;
};

export function Changelog({ cutOff, sx }: Props) {
  const [changelog, setChangelog] = useState('');

  useEffect(() => {
    const url = '/CHANGELOG.md';

    void fetch(url)
      .then((r) => r.text())
      .then((t) => {
        // Check if it actually got the changelog and not the index.html
        if (t.startsWith('<!doctype html>')) {
          setChangelog('Failed to load changelog');
          return;
        }

        // Display full changelog
        setChangelog(t);
      });
  }, [changelog, cutOff]);

  const cutOffChangelog = useMemo(() => cutChangelogAtVersion(changelog, cutOff), [changelog, cutOff]);

  return (
    <Box sx={sx}>
      <div className="markdown-body">
        <Markdown components={{ a: LinkRenderer }}>{cutOffChangelog}</Markdown>
      </div>
    </Box>
  );
}

function LinkRenderer(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={props.href} rel="noopener noreferrer" target="_blank">
      {props.children}
    </a>
  );
}
