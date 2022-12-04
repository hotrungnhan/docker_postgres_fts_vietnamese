import json

def read_json(filepath):
    with open(filepath, 'r') as f:
        return json.load(f)


print(f"echo '🏃 running builder'")
### environent
IMAGE_REPOSITORY = 'hotrungnhan/postgres'
FTS_VERSION=read_json("./fts-version.json")[-1]["version"]

for [key,value] in read_json('./version.json').items():
    # platform param
    platform = f"--platform {','.join(value['platform'])}"
    # tag param
    tags = value["tag"] + [f"{key}-{FTS_VERSION}"]
    tags= map(lambda t:f"-t {IMAGE_REPOSITORY}:{t}",tags)
    tags= " ".join(tags)

    print(f"docker buildx build --build-arg POSTGRES_VERSION={key} --build-arg FTS_VERSION={FTS_VERSION} {platform} {tags} --push .")
print(f"echo '✅ done check it out at: https://hub.docker.com/repository/docker/{IMAGE_REPOSITORY}'")
