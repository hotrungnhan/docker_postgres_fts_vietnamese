/* eslint-disable @typescript-eslint/no-var-requires */
const version = require('./version.json');
const fts_version = require('./fts-version.json');
const latest_fts_version = fts_version[fts_version.length - 1];
const IMAGE_REPOSITORY = 'hotrungnhan/postgres';
Object.entries(version).forEach(([key, value]) => {
  const platform = `--platform ${value.platform.join(',')}`;
  const tag = value.tag
    .concat([`${key}_${latest_fts_version.version}`])
    .map((t) => `-t ${IMAGE_REPOSITORY}:${t}`)
    .join(' ');
  console.log(`docker buildx build --build-arg POSTGRES_VERSION=${key} --build-arg FTS_VERSION=${latest_fts_version.version} ${platform} ${tag} --push .`);
});
