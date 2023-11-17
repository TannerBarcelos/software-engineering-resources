# About this project

This project is a representation of a folder structure, TypeScript configuration and NodeJS debugging configuration for Visual Studio Code example. It is a starting point / template for a NodeJS project written in TypeScript and includes a debugging configuration for Visual Studio Code as well as my preferred folder structure and TypeScript configuration.

I have created this project as a starting point for my own projects and I am sharing it in case it is useful to others as
well as to help me remember how to set up a project like this in the future.

It is also being used for learning purposes as I am learning TypeScript and NodeJS / brushing up on my JavaScript skills.

## Folder structure

The folder structure is as follows:

```
.
├── .vscode
│   ├── launch.json
│   └── settings.json
├── dist
│   └── index.js
│   └── index.js.map
│   └── ...other_files.js and .js.map
├── node_modules
│   └── ...
├── src
│   └── index.ts
│   └── lib
│       └── ...other_files.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── .prettierrc
```

## TypeScript configuration

The TypeScript configuration is as follows:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "allowJs": true,
    "removeComments": true,
    "noEmitOnError": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "sourceMap": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitThis": true,
    "useUnknownInCatchVariables": true,
    "alwaysStrict": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "allowUnreachableCode": false,
    "skipDefaultLibCheck": true,
    "skipLibCheck": true
  },
  "exclude": ["node_modules", "dist", ".prettierrc"]
}
```

## Debugging configuration

The debugging configuration is as follows:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/src/index.ts",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```

- `"preLaunchTask": "tsc: build - tsconfig.json"`: this line is optional and will build the project before debugging
- `outFiles": ["${workspaceFolder}/dist/**/*.js"]` : This line is optional and will allow you to debug the TypeScript files directly. If you remove this line, you will only be able to debug the JavaScript files in the dist folder.

> Learn how to debug TS in VSCode [here](https://code.visualstudio.com/docs/typescript/typescript-debugging)

## Prettier configuration

The Prettier configuration is as follows:

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": false,
  "bracketSpacing": false,
  "endOfLine": "lf"
}
```
