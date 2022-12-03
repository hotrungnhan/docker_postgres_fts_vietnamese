/* eslint-disable @typescript-eslint/no-var-requires */
const version = require('./version.json');
const fts = require('./fts-version.json');
const { exec } = require('child_process');

const latest_fts = fts[fts.length - 1];
const IMAGE_REPOSITORY = 'hotrungnhan/postgres';
Object.entries(version).forEach(([key, value]) => {
  //   const platform = `--platform ${value.platform.join(',')}`;
  const platform = '';
  const tag = value.tag
    .concat([`${key}_${latest_fts.version}`])
    .map((t) => `-t ${IMAGE_REPOSITORY}:${t}`)
    .join(' ');

  const env = { FTS_VERSION: latest_fts.version, ROOT_IMAGE_TAG: key };
  exec(
    `docker buildx build ${platform} ${tag} --push .`,
    { env: env, shell: 'bash', windowsHide: false },
    (err, stdout, stderr) => {
      if (err) throw err;
      if (stderr) throw stderr;
      console.log(stdout);
      exec(`docker push ${tag}}`);
    },
  );
});
