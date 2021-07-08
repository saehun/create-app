const simpleNode = `{
  "compilerOptions": {
    "module": "commonjs",
    "target": "esnext",
    "noImplicitAny": true,
    "moduleResolution": "node",
    "strictNullChecks": true,
    "sourceMap": true,
    "outDir": "dist",
    "declaration": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "lib": [ "dom", "esnext" ]
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "**/*.test.ts"
  ]
}
`;

const javascript = `{
  "compilerOptions": {
    "target": "esnext",
    "allowSyntheticDefaultImports": true,
    "moduleResolution": "node",
    "typeRoots": ["./node_modules/@types"],
    "noEmit": true,
    "allowJs": true,
    "checkJs": true,
    "lib": [ "dom", "webworker", "es2017" ]
  },
  "include": ["*.js"]
}
`;

export const tsconfig = {
  simpleNode,
  javascript,
};
