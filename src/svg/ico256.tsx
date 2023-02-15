import styles from '@/svg/ico.module.css';

export default function Ico() {
  return (
    <svg
      width='256'
      height='256'
      viewBox='0 0 256 256'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_538_105)'>
        <mask
          id='mask0_538_105'
          style={{ maskType: 'alpha' }}
          maskUnits='userSpaceOnUse'
          x='16'
          y='0'
          width='224'
          height='254'
        >
          <rect
            x='85.3906'
            y='0.5'
            width='84.3222'
            height='84.7698'
            rx='42.1611'
            fill='black'
            stroke='black'
          />
          <rect
            x='0.663164'
            y='-0.24137'
            width='170.38'
            height='33.1609'
            rx='8.5'
            transform='matrix(0.420849 -0.907131 0.905479 0.424392 14.6026 241.965)'
            fill='black'
            stroke='black'
          />
          <rect
            width='171.38'
            height='34.1609'
            rx='9'
            transform='matrix(0.420804 0.907152 -0.905457 0.424437 170.427 85.7695)'
            fill='black'
          />
        </mask>
        <g mask='url(#mask0_538_105)'>
          <rect
            className={styles.rotate}
            x={(256 - 400) / 2}
            y={(256 - 400) / 2}
            width='400'
            height='400'
            fill='url(#paint0_linear_538_105)'
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_538_105'
          x1='0.500003'
          y1='128.297'
          x2='271.551'
          y2='58.2031'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.322917' stopColor='#00C9E0' />
          <stop offset='1' stopColor='#41EAD4' />
        </linearGradient>
        <clipPath id='clip0_538_105'>
          <rect width='256' height='256' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
