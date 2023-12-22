export function ProgressBarPlaceholder() {
  return (
    <div className='group/slider absolute top-0 flex h-8 w-full -translate-y-1/2 cursor-pointer touch-none select-none items-center'>
      <div className='relative h-0.5 w-full grow overflow-hidden bg-border group-hover/slider:h-1'>
        <div className='animate-bar-loading absolute block h-full w-full bg-primary/40' />
      </div>
    </div>
  );
}
