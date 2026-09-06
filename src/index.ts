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
  addToAutorun,
  removeFromAutorun,
  addToQuickAccess,
  removeFromQuickAccess,
  pinToStart,
  unpinFromStart,
  removeFromDesktop,
  addToDesktop,
  compress,
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
            compress("compress"),
            groupBy(),
            sortBy(),
            addToAutorun("add to autorun"),
            removeFromAutorun("remove from autorun"),
            addToQuickAccess("add to quick access"),
            removeFromQuickAccess("remove from quick access"),
            pinToStart("pin to start"),
            unpinFromStart("unpin from start"),
            addToDesktop("add to desktop"),
            removeFromDesktop("remove from desktop"),
            properties(),
          ]
        }
      ]
    }
  ],
  [],
);
