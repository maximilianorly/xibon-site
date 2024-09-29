import { hero_font } from '@/app/fonts';
import styles from './AboutHero.module.css';

type AboutHeroProps = {};

const AboutHero: React.FC<AboutHeroProps> = () => {
  return (
    <>
      <div className='relative w-96 h-72'>
        <h1
          className={`${hero_font.className} z-10 text-9xl tracking-tightest absolute top-1/2`}
        >
          about
        </h1>
        <Crosshairs />
        <Waves />
        <SemiCircle />
      </div>
    </>
  );
};

export default AboutHero;

type CrosshairsProps = {};

const Crosshairs: React.FC<CrosshairsProps> = ({}) => {
  return (
    <>
      <svg
        className={styles.aboutHero__crosshairs}
        xmlns='http://www.w3.org/2000/svg'
        width='118'
        height='118'
        viewBox='0 0 118 118'
        fill='none'
      >
        <g className={`${styles.aboutHero__crosshair1}`}>
          <g>
            <path
              d='M15.837 53.4104L5.27881 63.9685'
              stroke='#EB7A4F'
              strokeWidth='3'
              strokeMiterlimit='10'
              strokeLinecap='round'
            />
          </g>
          <g>
            <path
              d='M15.8372 63.9688L5.27905 53.4106'
              stroke='#EB7A4F'
              strokeWidth='3'
              strokeMiterlimit='10'
              strokeLinecap='round'
            />
          </g>
        </g>
        <g className={styles.aboutHero__crosshair2}>
          <g>
            <path
              d='M47.9389 53.4103L37.3807 63.9685'
              stroke='#EB7A4F'
              strokeWidth='3'
              strokeMiterlimit='10'
              strokeLinecap='round'
            />
          </g>
          <g>
            <path
              d='M47.9392 63.9687L37.381 53.4106'
              stroke='#EB7A4F'
              strokeWidth='3'
              strokeMiterlimit='10'
              strokeLinecap='round'
            />
          </g>
        </g>
        <g className={styles.aboutHero__crosshair3}>
          <g>
            <path
              d='M79.9984 53.4106L69.4616 63.9474'
              stroke='#EB7A4F'
              strokeWidth='3'
              strokeMiterlimit='10'
              strokeLinecap='round'
            />
          </g>
          <g>
            <path
              d='M80.0199 63.9476L69.4831 53.4108'
              stroke='#EB7A4F'
              strokeWidth='3'
              strokeMiterlimit='10'
              strokeLinecap='round'
            />
          </g>
        </g>
        <g className={styles.aboutHero__crosshair4}>
          <g>
            <path
              d='M112.1 53.4106L101.542 63.9687'
              stroke='#EB7A4F'
              strokeWidth='3'
              strokeMiterlimit='10'
              strokeLinecap='round'
            />
          </g>
          <g>
            <path
              d='M112.101 63.969L101.542 53.4108'
              stroke='#EB7A4F'
              strokeWidth='3'
              strokeMiterlimit='10'
              strokeLinecap='round'
            />
          </g>
        </g>
      </svg>
    </>
  );
};

type WavesProps = {};

const Waves: React.FC<WavesProps> = ({}) => {
  return (
    <>
      <svg
        className={styles.aboutHero__waves}
        width='176'
        height='49'
        viewBox='0 0 176 49'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          className={styles.aboutHero__wave1}
          d='M2 8.87005C18 3.63573 36.2857 1.39244 54 2.14021C71.1428 2.88797 86.5714 8.49617 102 12.9827C126 17.4693 151.714 16.3477 174 8.87005'
          stroke='#5BA56A'
          strokeWidth='3'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          className={styles.aboutHero__wave2}
          d='M1.99994 24.573C17.4285 20.0865 33.9999 17.0954 51.1428 17.8432C67.7142 18.591 82.5713 22.7036 96.8571 27.5641C122 33.5462 150.571 32.4245 174 24.573'
          stroke='#5BA56A'
          strokeWidth='3'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          className={styles.aboutHero__wave3}
          d='M1.99994 40.6499C19.7142 34.6678 39.7142 32.4245 59.7142 34.2939C74.5713 35.7894 86.5713 40.276 99.7142 44.0148C123.714 49.9969 151.143 47.7536 174 40.6499'
          stroke='#5BA56A'
          strokeWidth='3'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
      </svg>
    </>
  );
};

type SemiCircleProps = {};

const SemiCircle: React.FC<SemiCircleProps> = ({}) => {
  return (
    <>
      <svg
        className={styles.aboutHero__semiCircle}
        width='124'
        height='98'
        viewBox='0 0 124 98'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M34.1363 8.2263C2.20691 25.8361 -9.38349 65.9908 8.22628 97.9202L123.83 34.1362C106.22 2.20684 66.0657 -9.38346 34.1363 8.2263Z'
          fill='#557BE1'
        />
      </svg>
    </>
  );
};
