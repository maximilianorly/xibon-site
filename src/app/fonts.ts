import { Karla as HeroFont, Roboto_Mono as Sans } from 'next/font/google';

export const hero_font = HeroFont({
    subsets: ['latin'],
    variable: '--font-hero',
    weight: '700'
});
  
export const sans_font = Sans({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['100', '700'],
    style: ['normal', 'italic']
});