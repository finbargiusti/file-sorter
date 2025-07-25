export type Options = {
	// FIXME: all we need?
	sourceFolder?: string;
	targetFolders: string[];
	keyMaps: 'vim'; 
}

import path from 'path';

import { readFile, writeFile } from 'fs/promises';

const optionsFile = () => path.resolve('options.json');

const defaultOptions: Options = {
	sourceFolder: undefined,
	targetFolders: [],
	keyMaps: 'vim'
}

export const getOptions = async (): Promise<Options> => {
	const optionsPath = optionsFile();
	return readFile(optionsPath, "utf8").then(
		f => JSON.parse(f) as Options
	).catch(err => {
		if (err.code != 'ENOENT') {
			throw err;
		}
		return defaultOptions;
	});
}

export const saveOptions = async (options: Options): Promise<void> => {
	const optionsPath = optionsFile();
	return writeFile(optionsPath, JSON.stringify(options, null, 2), "utf8");
}
