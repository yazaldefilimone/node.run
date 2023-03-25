import { FunctionComponent } from 'react';

export const TabFile: FunctionComponent = () => {
  return (
    <div className="h-full gap-2 flex items-center border-r border-b border-b-black relative before:absolute before:-bottom-1 before:h-1 before:bg-black before:block before:w-full before:left-0 px-4 border-zinc-900  min-w-[80px]">
      <span className="text-zinc-500">index.ts</span>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className="fill-zinc-500">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
        </svg>
      </button>
    </div>
  );
};

export const TabAddFile: FunctionComponent = () => {
  return (
    <div className="h-full gap-2 flex items-center border-r px-4 border-zinc-900  min-w-[80px]">
      <span className="text-zinc-500">new file</span>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className="fill-zinc-500">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
        </svg>
      </button>
    </div>
  );
};
