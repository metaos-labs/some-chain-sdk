git status
# yarn run build:all
git add --all
git commit -m $1
npm version patch
git push
npm publish
