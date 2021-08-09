BUILD_PROFILE=${1:-clinic}
echo "Build for profile ${BUILD_PROFILE}"

cat profile/${BUILD_PROFILE}.env > lib.js

echo "Verify lib.js"
cat lib.js

yarn dist