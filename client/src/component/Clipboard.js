import React, { useState } from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';
import { ImClipboard } from 'react-icons/im';

const CopyButton = styled.button`
  background: linear-gradient(
    90deg,
    rgba(255, 0, 0, 0.5) 0%,
    rgba(255, 154, 0, 0.5) 10%,
    rgba(208, 222, 33, 0.5) 20%,
    rgba(79, 220, 74, 0.5) 30%,
    rgba(63, 218, 216, 0.5) 40%,
    rgba(47, 201, 226, 0.5) 50%,
    rgba(28, 127, 238, 0.5) 60%,
    rgba(95, 21, 242, 0.5) 70%,
    rgba(186, 12, 248, 0.5) 80%,
    rgba(251, 7, 217, 0.5) 90%,
    rgba(255, 0, 0, 0.5) 100%
  );
  font-size: 30px;
  position: absolute;

  :hover {
    color: #ff67e7;
  }
`;

const Clipboard = props => {
  const [copyText, setCopyText] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = e => {
    setCopyText(props.giph[props.index].images.original.url);
    copy(copyText);
    e.target.focus();
    setCopySuccess(' Copied Boss!');
    setTimeout(() => {
      setCopySuccess('');
    }, 750);
  };

  return (
    <div>
      <CopyButton onClick={copyToClipboard}>
        <ImClipboard />
        {copySuccess}
        {props.children}
      </CopyButton>
    </div>
  );
};

export default Clipboard;
