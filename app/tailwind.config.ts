import { join } from 'path';
import type { Config } from 'tailwindcss';
import { myCustomTheme } from './src/custom-theme';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config}*/
const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],

	theme: {
		extend: {
			animation: {
				'fade-in': 'fade-in 0.5s linear forwards',
				marquee: 'marquee var(--marquee-duration) linear infinite',
				'spin-slow': 'spin 4s linear infinite',
				'spin-slower': 'spin 6s linear infinite',
				'spin-reverse': 'spin-reverse 1s linear infinite',
				'spin-reverse-slow': 'spin-reverse 4s linear infinite',
				'spin-reverse-slower': 'spin-reverse 6s linear infinite'
			},
			keyframes: {
				'fade-in': {
					from: {
						opacity: '0'
					},
					to: {
						opacity: '1'
					}
				},
				marquee: {
					'100%': {
						transform: 'translateY(-50%)'
					}
				},
				'spin-reverse': {
					to: {
						transform: 'rotate(-360deg)'
					}
				}
			},
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
			}
		}
	},

	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		skeleton({
			themes: { preset: ['skeleton'], custom: [myCustomTheme] }
		})
	]
} satisfies Config;

export default config;
