const simpleNode = `{
  "compilerOptions": {
    "module": "commonjs",
    "target": "esnext",
    "noImplicitAny": true,
    "moduleResolution": "node",
    "strictNullChecks": true,
    "sourceMap": false,
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
}`;

const javascript = `{
  "compilerOptions": {
    "module": "commonjs",
    "target": "esnext",
    "moduleResolution": "node"
  },
  "include": [
    "src/**/*"
  ]
}`;

export const tsconfig = {
  simpleNode,
  javascript,
};
