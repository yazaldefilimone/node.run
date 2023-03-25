'use client';
import { Fragment, FunctionComponent, useEffect, useRef, useState } from 'react';
import { JetBrains_Mono } from 'next/font/google';
import { cn } from '~/shared/en';
import { CodeEditor } from './code';
const jetBrain = JetBrains_Mono({ subsets: ['latin'] });
type codeEditorType = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export const CodeEditorWrapper: FunctionComponent<codeEditorType> = () => {
  return (
    <CodeEditor
      codeRef={null}
      ref={null}
      language={'js'}
      style={{
        fontSize: 12,
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
      data-color-mode="dark"
    />
  );
};
