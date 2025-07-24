import type { PageServerLoad } from './$types';
import type { Options } from '$lib/options'

export const load: PageServerLoad<Options> = ({ params }) => {
	// TODO: load from file
	return {
		sourceFolder: 'example',
		targetFolders: ['example1', 'example2'],
		keyMaps: 'vim'
	}
}

