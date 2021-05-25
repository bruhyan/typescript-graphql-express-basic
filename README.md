# Basic Guide/Boilerplate To Apollo-Typescript-Codegen-Express Server

## Credit to original tutorial
Original tutorial can be found here: https://levelup.gitconnected.com/set-up-a-project-using-express-graphql-and-typescript-1fa38ee79886

## Libraries used
- Express
- Apollo
- GraphQL
- nodemon

## Running instructions
1) install dependencies
```
npm install
```
2) run server locally
```
nodemon src/index.ts
```

## Codegen
We use Codegen to generate typescript files from our schemas (.gql files) for the server to use.
1) Install Codegen as dev dependency:
```
npm install -D @graphql-codegen/cli graphql
```
2) Run through set up using:
```
npx graphql-codegen init
```
2.1) For the second option, the path we will be using (can be changed):
```
src/graphql/schemas/**/*.graphql
```
2.2) For the fourth option, the path to output the generated file (can be changed):
```
src/graphql/generated.ts
```
2.3) For the option to choose script name to run codegen command, simply use:
```
codegen
```
2.4) Once done, run:
```
npm install
npm run codegen
```

## graphql-tools package
We will be using graphql-tools to access various helpful graphql functions:
```
npm install -D graphql-tools
```

## Lodash
We will be using lodash to access 'merge' function. Required for merging resolvers and schemas
```
npm install --save lodash
npm install -D @types/lodash
```

## graphql-import-node
Required to import .gql files in application:
```
npm install --save graphql-import-node
```

## additional dependencies (needed for fresh typescript projects)
npm install -D typescript
npm install -D @types/express
npm install -D nodemon ts-node

## Running GraphQL playground
1) Install graphiql: https://www.electronjs.org/apps/graphiql
2) Go to ENDPOINT/graphql in your browser