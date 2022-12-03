/* eslint-disable @typescript-eslint/no-var-requires */
const version = require('./version.json');
const fts = require('./fts-version.json');

const latest_fts = fts[fts.length - 1];
const IMAGE_REPOSITORY = 'hotrungnhan/postgres';
Object.entries(version).forEach(([key, value]) => {
  const platform = `--platform ${value.platform.join(',')}`;
  const tag = value.tag
    .concat([`${key}_${latest_fts.version}`])
    .map((t) => `-t ${IMAGE_REPOSITORY}:${t}`)
    .join(' ');
  console.log(`docker buildx build ${platform} ${tag} --push .`);
});
