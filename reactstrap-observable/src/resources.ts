
export type Resources = 'films' | 'people' | 'species' | 'planets' | 'spaceships' | 'Vehicles';

export const mapResourceToUrl = (resource: Resources) => `/${resource}`;

export const mapUrlToResource = (url: string): Resources => {
  const resource = url.split('/').pop();
  if (resource && isResource(resource)) {
    return resource;
  }
  throw new Error(`Unvalid URL: ${url}`);
};

export function isResource(resource: string): resource is Resources {
  return ['films', 'people', 'species', 'planets', 'spaceships', 'Vehicles'].indexOf(resource) !== -1;
}