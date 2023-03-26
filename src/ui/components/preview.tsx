'use client';

import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { JetBrains_Mono } from 'next/font/google';

import { processHtml, htmlEncode } from '~/shared/utils';
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

export const Preview = () => {
  const language = 'sh';
  const prefixCls = 'w-tc-editor';

  const [value] = useCLCode();

  const htmlStr = useMemo(
    () =>
      processHtml(
        `<pre aria-hidden=true><code ${language && value ? `class="language-${language}"` : ''} >${htmlEncode(
          codeFormatted(String(value || '')),
        )}</code><br /></pre>`,
      ),
    [value, language],
  );

  const preView = useMemo(
    () => (
      <div
        style={{ minHeight: 16 }}
        className={clsx(`${prefixCls}-preview ${language ? `language-${language}` : ''}`, editor, jetBrain.className)}
        dangerouslySetInnerHTML={{
          __html: htmlStr,
        }}
      />
    ),
    [prefixCls, language, htmlStr],
  );
  return (
    <div className={clsx(container, `${prefixCls}`, '!bg-black p-4 overflow-y-scroll')} data-color-mode={'dark'}>
      {preView}
    </div>
  );
};
