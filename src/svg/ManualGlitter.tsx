import styles from '@/svg/manual-glitter.module.css';

export default function Glitter() {
  const height = 48;
  const width = 48;

  // const stopMotion = discretes.map((discrete) => {
  //   return `
  //     ${discrete.percent}% {
  //       -webkit-transform: translateX(${(
  //         (discrete.translatex / TRANSLATEX_MAX) *
  //         width
  //       ).toFixed(2)}px) scaleX(${(discrete.scalex / SCALEX_MAX).toFixed(2)});
  //       transform: translateX(${(
  //         (discrete.translatex / TRANSLATEX_MAX) *
  //         width
  //       ).toFixed(2)}px) scaleX(${(discrete.scalex / SCALEX_MAX).toFixed(2)});
  //     }
  //   `;
  // });

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
      >
        <rect
          x='0'
          y='0'
          width='12'
          height='2'
          rx='1'
          fill='#41EAD4'
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
        />
        <rect
          x='0'
          y='0'
          width='12'
          height='2'
          rx='1'
          fill='#41EAD4'
          className={styles.stretchl}
        />
        <rect
          x='0'
          y='0'
          width='2'
          height='12'
          rx='1'
          className={styles.stretchb}
          fill='#41EAD4'
        />
      </svg>
    </>
  );
}
