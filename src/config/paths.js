const remote = window.require('electron').remote;

const folder = remote.getGlobal('env').fsPath;

export const surveys = folder + 'surveys.json';
export const todos = folder + 'to-investigate.json';
export const codeList = folder + 'codeList.json';
export const pollster = folder + 'pollster.json';

export const investigated = folder + 'investigated.json';
