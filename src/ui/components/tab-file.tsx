import { FunctionComponent } from 'react';

export const TabFile: FunctionComponent = () => {
  return (
    <div className="h-full gap-2 flex items-center border-r border-b border-b-black relative before:absolute before:-bottom-1 before:h-1 before:bg-black before:block before:w-full before:left-0 px-4 border-zinc-900  min-w-[80px]">
      <span className="text-zinc-500">index.js</span>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className="fill-zinc-500">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
        </svg>
      </button>
    </div>
  );
};

type tabAddFileType = {
  action: () => void;
};

export const TabAddFile: FunctionComponent<tabAddFileType> = ({ action }) => {
  return (
    <div className="h-full gap-2 flex items-center  px-4 border-zinc-900  min-w-[80px]">
      <button onClick={() => action()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className="fill-zinc-500">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M16.394 12L10 7.737v8.526L16.394 12zm2.982.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" />
        </svg>
      </button>
    </div>
  );
};
