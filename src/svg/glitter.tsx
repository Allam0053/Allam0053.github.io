import { SVGProps } from 'react';

import styles from '@/svg/glitter.module.css';

import clsxm from '@/lib/clsxm';

type GlitterProps = Omit<
  SVGProps<SVGSVGElement>,
  'height' | 'width' | 'className'
> & {
  height?: number;
  width?: number;
  className?: string;
  delay?: number;
};

export default function Glitter({
  height = 48,
  width = 48,
  className,
  delay = 0,
  ...props
}: GlitterProps) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={`-${(width / 2).toFixed(2)} -${(height / 2).toFixed(
          2
        )} ${width} ${height}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={clsxm(className)}
        {...props}
      >
        <rect
          x='0'
          y='0'
          width='12'
          height='2'
          rx='1'
          fill='#41EAD4'
          style={{ animationDelay: delay + 'ms' }}
          className={styles.stretchr}
        />
        <rect
          x='0'
          y='0'
          width='2'
          height='12'
          rx='1'
          className={styles.stretcht}
          fill='#41EAD4'
          style={{ animationDelay: delay + 'ms' }}
        />
        <rect
          x='0'
          y='0'
          width='12'
          height='2'
          rx='1'
          fill='#41EAD4'
          className={styles.stretchl}
          style={{ animationDelay: delay + 'ms' }}
        />
        <rect
          x='0'
          y='0'
          width='2'
          height='12'
          rx='1'
          className={styles.stretchb}
          fill='#41EAD4'
          style={{ animationDelay: delay + 'ms' }}
        />
      </svg>
    </>
  );
}
