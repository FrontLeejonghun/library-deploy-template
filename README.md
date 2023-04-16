# library-deploy-template

npm에 라이브러리 배포를 하기 위한 Rollup 템플릿입니다.

- 구성은 기본적으로 util,hook,component로 작성이 되어있습니다.

- 기본적인 폴더 구성은 아래와 같습니다.
   - [README.md](README.md)
   - [list.md](list.md)
   - [package.json](package.json)
   - [publish.sh](publish.sh)
   - [rollup.config.mjs](rollup.config.mjs)
   - __src__
     - __components__
       - [index.ts](src/components/index.ts)
     - __hooks__
       - [index.ts](src/hooks/index.ts)
     - __utils__
       - [index.ts](src/utils/index.ts)
     - [index.ts](src/index.ts)
   - [tsconfig.json](tsconfig.json)
   - [yarn.lock](yarn.lock)


   각 배포를 하기 위해, 구성은 원하는 대로 변경 하면 되고, 추후 배포를 위해 publish.sh 를 작성해놨으니, 참고 바랍니다.