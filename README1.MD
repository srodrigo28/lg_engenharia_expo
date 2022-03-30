# Essa projeto React com Expo
* link do curso 
    * https://cursos.alura.com.br/course/react-native-expo-navegacao-menu-suporte-telas/task/90945
* Ultimo video seguido
    * https://cursos.alura.com.br/course/react-native-expo-navegacao-menu-suporte-telas/task/90948
## Comandos Usados
* Para criar o projeto
    * expo init nomeProjeto
* Para rodar o projeto
    * expo start

### Migrando para typeScript
yarn add -D typescript @types/react @types/react-native
npm i -D typescript @types/react @types/react-native

* https://reactnative.dev/docs/typescript
* criar o arquivo

tsconfig.json
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react-native",
    "lib": ["es2017"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
  ]
}