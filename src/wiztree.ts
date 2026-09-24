import type { MenuItem, InvokeProps } from 'rcm-kit';

export function wiztree(labelKey = 'Wiztree'): MenuItem {
  return {
    key: labelKey,
    label: labelKey,
    match: (props) => (props.files.length === 1 && props.files[0].isDir) || (props.files.length === 0),
    action: (props: InvokeProps) => {
      const dir =  props.files.length===0 ? props.cwd : props.files[0].path;
      const pwsh = `$t="$env:TEMP/wiztree-rcm.json";wiztree-metafile ${dir} > $t;metafile-image $t --ui`;
      return { cmd: 'powershell', args: ["-c", pwsh], cwd: props.cwd, window: "Hidden" };
    },
  };
}
