/**
 * Lite right-click menu — essentials only, no icon ribbon.
 */
import { Menu } from 'rcm-kit';
import * as menus from 'rcm-kit';
import { fsv } from './fsv'

export default new Menu(
  [
    {
      items: [
        menus.newMenu(),
        menus.copyAs(),
      ],
    },
    {
      items: [
        menus.vscode(),
        menus.terminal(),
        menus.unzip(),
        menus.zip(),
        fsv(),
      ],
    },
    {
      items: [
        menus.ssh(),
        {
          label: 'More',
          items: [
            menus.copy(),
            menus.paste(),
            menus.openWith(),
            menus.openFileLocation(),
            menus.groupBy(),
            menus.sortBy(),
            menus.properties(),
          ]
        }
      ]
    }
  ],
  [],
);
