// import { SnowstormConfig } from '@snowstorm/core/server';
import { VitePluginFonts } from 'vite-plugin-fonts';

export const Config = {
	site: {
		build: {
			plugins: [
				VitePluginFonts({
					google: {
						families: ['Inter'],
					},
				}),
			],
		},
	},
};
