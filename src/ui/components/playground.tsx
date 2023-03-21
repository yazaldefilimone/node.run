export const PlayGround = () => {
  return (
    <div className="h-4/5 w-4/5 relative ">
      <section className="h-4/5 z-50 w-3/4 mx-auto relative my-0 bg-black rounded shadow border border-zinc-900">
        <header className="h-10 w-full border-b border-zinc-900 flex items-center">
          <div className="h-full gap-2 flex items-center border-r px-3 border-zinc-900">
            <span className="w-3 h-3 cursor-pointer rounded-full bg-red-600 block"></span>
            <span className="w-3 h-3 cursor-pointer rounded-full bg-yellow-600 block"></span>
            <span className="w-3 h-3 cursor-pointer rounded-full bg-green-600 block"></span>
          </div>
        </header>
        <div className="grid grid-cols-[2fr_1fr] relative h-[calc(100%-40px)] w-full">
          <div className=" border-r border-zinc-900"></div>
          <div></div>
        </div>
      </section>
      <div className="bg-code h-4/5 z-1"></div>
    </div>
  );
};
