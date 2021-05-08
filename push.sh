#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

#查看文件状态
git status

#编译打包dist
#npm run build

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git init
git add -A
git commit -m 'push'

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:luckyzyx/jsonserver.git master

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:luckyzyx/luckyzyx.git master:gh-pages


