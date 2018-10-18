export const urlToId = (url: string) => {
  const splited = url.split('/');
  return splited[splited.length - 2];
};