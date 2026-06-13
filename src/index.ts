import { fsv } from './fsv'
import {
  newMenu,
  copy,
  copyAs,
  groupBy,
  Menu,
  openFileLocation,
  openWith,
  paste,
  properties,
  sortBy,
  ssh,
  terminal,
  unzip,
  vscode,
  zip,
} from "rcm-kit"

export default new Menu(
  [
    {
      items: [
        newMenu(),
        copyAs(),
      ],
    },
    {
      items: [
        vscode(),
        terminal(),
        unzip(),
        zip(),
        fsv(),
      ],
    },
    {
      items: [
        ssh(),
        {
          label: 'More',
          items: [
            copy(),
            paste(),
            openWith(),
            openFileLocation(),
            groupBy(),
            sortBy(),
            properties(),
          ]
        }
      ]
    }
  ],
  [],
);
