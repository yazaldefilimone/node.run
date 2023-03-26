'use client';
import { CodeEditor } from './code-editor';
import '@uiw/react-textarea-code-editor/dist.css';
import { TabAddFile, TabFile } from './tab-file';
import { JetBrains_Mono } from 'next/font/google';
import { cn } from '~/shared/en';
import { Preview } from './preview';
import { getWebContainer, packageJSON } from '~/lib/web-container';
import { extractPackageNames } from '~/shared/extract-package-names';
import { stripAnsi } from '../../shared/strip-ansi';
import { useState } from 'react';
import { useCLCode } from '../hooks/useClCode';
import { removeFunction } from '~/lib/fn-names';
import { measureExec } from '~/lib/measure';
import { toast } from 'sonner';

const jetBrain = JetBrains_Mono({ subsets: ['latin'] });
export const PlayGround = () => {
  const [code, setCode] = useState('');
  const [term, setTerm] = useCLCode();
  const [load, setLoad] = useState(false);

  const initialCode = `import 'isomorphic-fetch'
    import chalk from 'chalk'
    console.log("Hello World"));`;

  async function init() {
    setTerm('');
    setLoad(true);

    const webContainer = await getWebContainer();
    const dependencies = extractPackageNames(code);
    const preFn = removeFunction(code);

    const pkg = packageJSON({
      code: preFn.length === 2 ? measureExec(code, preFn) : code,
      filename: 'index.js',
      dependencies,
    });

    await webContainer.mount(pkg);

    const install = await webContainer.spawn('yarn');
    install.output.pipeTo(
      new WritableStream({
        write(install) {
          setTerm((old) => old + ' ' + stripAnsi(install));
        },
      }),
    );
    await install.exit;

    const start = await webContainer.spawn('yarn', ['start']);

    start.output.pipeTo(
      new WritableStream({
        write(start) {
          setTerm((old) => old + ' ' + stripAnsi(start));
        },
      }),
    );
    setLoad(false);
  }

  return (
    <div className="h-4/5 w-4/5 relative ">
      <section className="h-4/5 z-50 w-3/4 mx-auto relative my-0 bg-black rounded-md shadow-md border border-zinc-600">
        <header className="h-10 w-full border-b border-zinc-900 flex items-center">
          <div className="h-full gap-2 flex items-center border-r px-3 border-zinc-900">
            <span className="w-3 h-3 cursor-pointer rounded-full bg-red-600 block"></span>
            <span className="w-3 h-3 cursor-pointer rounded-full bg-yellow-600 block"></span>
            <span className="w-3 h-3 cursor-pointer rounded-full bg-green-600 block"></span>
          </div>
          <TabFile />
          <TabAddFile
            action={() =>
              toast.promise(init(), {
                error: 'Internal Error',
                success: 'code running successfully!',
                loading: 'code processing...',
              })
            }
          />
        </header>
        <div className={cn('grid grid-cols-[2fr_1.1fr] relative h-[calc(100%-40px)] w-full', jetBrain)}>
          <div className={cn('border-r border-zinc-900 pl-[23px]  py-4 px-2 overflow-y-auto relative')}>
            <CodeEditor language="js" code={code} setCode={setCode} />
          </div>
          <Preview />
        </div>
      </section>
      <div className="bg-code h-4/5 z-1"></div>
    </div>
  );
};
