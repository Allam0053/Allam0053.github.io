import styles from '@/svg/ico.module.css';

export default function Ico({ width = 512, height = 512 }) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_376_2)'>
          <mask
            id='mask0_376_2'
            style={{ maskType: 'alpha' }}
            maskUnits='userSpaceOnUse'
            x='29'
            y='0'
            width='453'
            height='510'
          >
            <rect
              x='168.78'
              width='170.644'
              height='171.54'
              rx='85.3222'
              fill='#C4C4C4'
            />
            <rect
              width='342.76'
              height='68.3219'
              rx='9'
              transform='matrix(0.420849 -0.907131 0.905479 0.424392 27 483.005)'
              fill='#C4C4C4'
            />
            <rect
              width='342.76'
              height='68.3219'
              rx='9'
              transform='matrix(0.420804 0.907152 -0.905457 0.424437 339.855 171.54)'
              fill='#C4C4C4'
            />
          </mask>
          <g mask='url(#mask0_376_2)'>
            <rect
              // style={{
              //   transform: `translateY(${512 - num * 128}px)`,
              //   transition:
              //     'transform 150ms cubic-bezier(0.64, 0.57, 0.67, 1.53)',
              // }}
              className={styles.rotate}
              x={(512 - 800) / 2}
              y={(512 - 800) / 2}
              width='800'
              height='800'
              fill='url(#paint0_linear_376_2)'
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id='paint0_linear_376_2'
            x1='0'
            y1='245.526'
            x2='521.224'
            y2='136.473'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.322917' stopColor='#00C9E0' />
            <stop offset='1' stopColor='#41EAD4' />
          </linearGradient>
          <clipPath id='clip0_376_2'>
            <rect width='512' height='512' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
