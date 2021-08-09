BUILD_PROFILE=${1:-clinic}
echo "Build for profile ${BUILD_PROFILE}"

cat profile/${BUILD_PROFILE}.js > lib.js
cat profile/${BUILD_PROFILE}.dev > electron-builder.env

echo "Verify lib.js and electron-builder.env"
cat lib.js
cat electron-builder.env

yarn dist