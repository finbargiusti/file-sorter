import type { Actions, PageServerLoad } from './$types';
import type { Options } from '$lib/options'
import { getOptions, saveOptions } from '$lib/options'

export const load: PageServerLoad<Options> = async ({ params }) => {
	// TODO: load from file
	return getOptions();
}

export const actions = {
	default: async (event) => {
		const formData = event.request.formData();
		return formData.then(data => {
			const sourceFolder = data.get('sourceFolder') as string;
			const targetFolders = data.get('targetFolders') as string;
			const keyMaps = data.get('keyMaps') as string;
			const options = {
				sourceFolder: sourceFolder,
				targetFolders: targetFolders.split(',').map(f => f.trim()),
				keyMaps: keyMaps as 'vim'
			} as Options;
			return saveOptions(options);
			}
		)
	}
} satisfies Actions
