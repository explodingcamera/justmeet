import { SnowstormConfig } from '@snowstorm/core/server';
import { Plugin as PluginFonts } from 'vite-plugin-fonts';

export const Config: SnowstormConfig = {
	site: {
		build: {
			plugins: [
				PluginFonts({
					google: {
						families: ['Inter'],
					},
				}),
			],
		},
	},
};
