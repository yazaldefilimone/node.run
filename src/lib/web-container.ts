'use client'
import { FileSystemTree, WebContainer } from '@webcontainer/api';

let webContainerInstance: WebContainer;

export const getWebContainer = async () => {
  if (!webContainerInstance) {
    webContainerInstance = await WebContainer.boot({ coep: 'require-corp'});
    return webContainerInstance;
  }
  return webContainerInstance;
};


type packageJSONType = {
  code: string;
  filename: string;
  dependencies: string[];
};


export const packageJSON = (props: packageJSONType): FileSystemTree => {
  const { code, filename, dependencies } = props;

  const dependenciesFormatted = dependencies.map((dep) => {
    return `"${dep}": "latest"`;
  });

  const dependence = dependenciesFormatted.join(',');

  const fileSetup = {
    file: {
      contents: code,
    },
  };

  const packageSetup = {
    file: {
      contents: `
        {
          "name": "node-run-dev",
          "type": "module",
          "dependencies": { ${dependenciesFormatted.length < 1 ? '' : dependence} },
          "scripts": {
              "start": "node ${filename}"
          }
        }
        `.trim(),
    },
  };

  const pkg = {
    [filename]: fileSetup,
    'package.json': packageSetup,
  };

  return pkg;
};