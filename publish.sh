echo "delete dist file"
sudo rm -rf dist/

echo "build start"
yarn build

echo "publish start"
npm publish --registry http://localhost:4873
