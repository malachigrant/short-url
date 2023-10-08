'use client';

import Textbox from 'ui-library/components/Textbox';
import Button from 'ui-library/components/Button';
import styles from '@styles/createUrlStyles.module.scss';
import { useState } from 'react';
import { createUrl } from '@/app/clients/Client';

export default function CreateUrlPage() {
  const { textbox } = styles;
  const [text, setText] = useState('hi');
  const submitUrl = async () => {
    const match = document.location.pathname.match(/\/go\/(.*)/);
    if (match && match[1]) {
      const name = match[1];
      console.log(match);
      const res = await createUrl(name, text);
      console.log('res', res);
    }
  };
  return (
    <div className={textbox}>
      <Textbox text={text} onChange={setText} />
      <Button text="Submit" onClick={submitUrl} />
    </div>
  );
}
