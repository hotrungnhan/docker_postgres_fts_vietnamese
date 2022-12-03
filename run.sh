### create docker build cross platform if not exist
if ! ( docker buildx ls | awk '{print $1}' | grep -Fxq "cross-platform-builder" )
### create docker build cross platform if not exist
then
    docker buildx create --name cross-platform-builder  --driver=docker-container
    echo "✅ created cross-platform-builder"
fi
python3 upgrade.py | bash