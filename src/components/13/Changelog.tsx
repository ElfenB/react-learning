import { useEffect, useState } from 'react';

import Markdown from 'react-markdown';

// https://github.com/remarkjs/react-markdown/issues/100#issuecomment-504505123
import 'github-markdown-css';

export function Changelog() {
  const [changelog, setChangelog] = useState('');

  useEffect(() => {
    const url = '/CHANGELOG.md';

    void fetch(url)
      .then((r) => r.text())
      .then((t) => {
        // Check if it actually got the changelog and not the index.html
        if (!t.startsWith('<!doctype html>')) {
          setChangelog(t);
        }
      });
  }, []);

  return (
    <div className="markdown-body">
      <Markdown>{changelog}</Markdown>
    </div>
  );
}
