'use client';
import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { JetBrains_Mono } from 'next/font/google';

import { processHtml, htmlEncode } from '~/shared/utils';
import shortcuts from '~/shared/shortcuts';
import { toast } from 'sonner';
import { codeFormatted } from '~/lib/code-formatted';

import '../styles/coder.css';
import clsx from 'clsx';
import { useCLCode } from '../hooks/useClCode';

export const container = 'relative text-left box-border p-0 overflow-hidden';

export const textarea =
  'absolute top-0 left-0 h-full w-full resize-none text-opacity-80 overflow-hidden font-medium antialiased whitespace-pre-wrap break-all bg-transparent';

export const editor =
  'm-0 border-0 bg-transparent box-border font-medium antialiased whitespace-pre-wrap break-all outline-none';

const jetBrain = JetBrains_Mono({ subsets: ['latin'] });

export interface TextareaCodeEditorProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  ['data-color-mode']?: 'light' | 'dark';
  language?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void | boolean;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}

export const CodeEditor: FunctionComponent<TextareaCodeEditorProps> = (props) => {
  const { value: _, code, setCode, ...other } = props;
  const prefixCls = 'w-tc-editor';

  const contentStyle = {
    padding: 0,
  };

  const htmlStr = useMemo(
    () =>
      processHtml(
        `<pre aria-hidden=true><code ${
          props.language && code ? `class="language-${props.language}"` : ''
        } >${htmlEncode(String(code || ''))}</code><br /></pre>`,
      ),
    [code, props.language],
  );

  const preView = useMemo(
    () => (
      <div
        style={{ ...contentStyle, minHeight: 16 }}
        className={clsx(
          `${prefixCls}-preview ${props.language ? `language-${props.language}` : ''}`,
          editor,
          jetBrain.className,
        )}
        dangerouslySetInnerHTML={{
          __html: htmlStr,
        }}
      />
    ),
    [prefixCls, props.language, htmlStr],
  );

  const textareaProps: React.TextareaHTMLAttributes<HTMLTextAreaElement> = {
    autoComplete: 'off',
    autoCorrect: 'off',
    spellCheck: 'false',
    autoCapitalize: 'off',
    ...other,
    onKeyDown: (evn) => {
      if (!props.onKeyDown || props.onKeyDown(evn) !== false) {
        shortcuts(evn);
      }
    },
    style: {
      ...contentStyle,
      minHeight: 16,
      ...(props.placeholder && !code ? { WebkitTextFillColor: 'inherit' } : {}),
    },
    onChange: (evn) => {
      setCode(evn.target.value);
      props.onChange && props.onChange(evn);
    },
    className: `${prefixCls}-text`,
    value: code,
  };

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === 'f') {
        setCode(codeFormatted(code));
        toast('code formatted!!');
      }
    });
  }, [code]);

  return (
    <div
      className={clsx(container, `${prefixCls}`, other.className, '!bg-black')}
      style={other.style}
      data-color-mode={'dark'}
    >
      <textarea id="myTextarea" {...textareaProps} className={clsx(textarea, editor, jetBrain.className)} />
      {preView}
    </div>
  );
};
