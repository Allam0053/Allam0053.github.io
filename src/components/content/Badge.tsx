import clsxm from '@/lib/clsxm';

type BadgeProps = {
  className?: string;
  variant?: string; // 'primary' | 'outline' | 'ghost' | 'light' | 'dark';
} & React.ComponentPropsWithoutRef<'span'>;

export default function Badge({
  className,
  variant = 'primary',
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={clsxm(
        'mr-2 mt-2 inline-block rounded-full py-1 px-2 text-xs font-semibold uppercase last:mr-0',
        variant === 'primary' && 'bg-white text-slate-500',
        variant === 'pink' && 'bg-pink-500 text-white',
        variant === 'dark' && 'bg-slate-600 text-white',
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
