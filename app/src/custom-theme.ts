
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "4px",
		"--theme-rounded-container": "2px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #BF0615 
		"--color-primary-50": "245 218 220", // #f5dadc
		"--color-primary-100": "242 205 208", // #f2cdd0
		"--color-primary-200": "239 193 197", // #efc1c5
		"--color-primary-300": "229 155 161", // #e59ba1
		"--color-primary-400": "210 81 91", // #d2515b
		"--color-primary-500": "191 6 21", // #BF0615
		"--color-primary-600": "172 5 19", // #ac0513
		"--color-primary-700": "143 5 16", // #8f0510
		"--color-primary-800": "115 4 13", // #73040d
		"--color-primary-900": "94 3 10", // #5e030a
		// secondary | #590202 
		"--color-secondary-50": "230 217 217", // #e6d9d9
		"--color-secondary-100": "222 204 204", // #decccc
		"--color-secondary-200": "214 192 192", // #d6c0c0
		"--color-secondary-300": "189 154 154", // #bd9a9a
		"--color-secondary-400": "139 78 78", // #8b4e4e
		"--color-secondary-500": "89 2 2", // #590202
		"--color-secondary-600": "80 2 2", // #500202
		"--color-secondary-700": "67 2 2", // #430202
		"--color-secondary-800": "53 1 1", // #350101
		"--color-secondary-900": "44 1 1", // #2c0101
		// tertiary | #276A37 
		"--color-tertiary-50": "223 233 225", // #dfe9e1
		"--color-tertiary-100": "212 225 215", // #d4e1d7
		"--color-tertiary-200": "201 218 205", // #c9dacd
		"--color-tertiary-300": "169 195 175", // #a9c3af
		"--color-tertiary-400": "104 151 115", // #689773
		"--color-tertiary-500": "39 106 55", // #276A37
		"--color-tertiary-600": "35 95 50", // #235f32
		"--color-tertiary-700": "29 80 41", // #1d5029
		"--color-tertiary-800": "23 64 33", // #174021
		"--color-tertiary-900": "19 52 27", // #13341b
		// success | #06BF31 
		"--color-success-50": "218 245 224", // #daf5e0
		"--color-success-100": "205 242 214", // #cdf2d6
		"--color-success-200": "193 239 204", // #c1efcc
		"--color-success-300": "155 229 173", // #9be5ad
		"--color-success-400": "81 210 111", // #51d26f
		"--color-success-500": "6 191 49", // #06BF31
		"--color-success-600": "5 172 44", // #05ac2c
		"--color-success-700": "5 143 37", // #058f25
		"--color-success-800": "4 115 29", // #04731d
		"--color-success-900": "3 94 24", // #035e18
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #BF0616 
		"--color-error-50": "245 218 220", // #f5dadc
		"--color-error-100": "242 205 208", // #f2cdd0
		"--color-error-200": "239 193 197", // #efc1c5
		"--color-error-300": "229 155 162", // #e59ba2
		"--color-error-400": "210 81 92", // #d2515c
		"--color-error-500": "191 6 22", // #BF0616
		"--color-error-600": "172 5 20", // #ac0514
		"--color-error-700": "143 5 17", // #8f0511
		"--color-error-800": "115 4 13", // #73040d
		"--color-error-900": "94 3 11", // #5e030b
		// surface | #495a8f 
		"--color-surface-50": "228 230 238", // #e4e6ee
		"--color-surface-100": "219 222 233", // #dbdee9
		"--color-surface-200": "210 214 227", // #d2d6e3
		"--color-surface-300": "182 189 210", // #b6bdd2
		"--color-surface-400": "128 140 177", // #808cb1
		"--color-surface-500": "73 90 143", // #495a8f
		"--color-surface-600": "66 81 129", // #425181
		"--color-surface-700": "55 68 107", // #37446b
		"--color-surface-800": "44 54 86", // #2c3656
		"--color-surface-900": "36 44 70", // #242c46
		
	}
}