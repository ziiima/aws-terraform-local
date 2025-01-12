export function viteHMRTags(viteHost: string) {
  return `
    <script type="module" src="${viteHost}/@vite/client"></script>
    <script type="module">
      import RefreshRuntime from '${viteHost}/@react-refresh'
      RefreshRuntime.injectIntoGlobalHook(window)
      window.$RefreshReg$ = () => {}
      window.$RefreshSig$ = () => (type) => type
      window.__vite_plugin_react_preamble_installed__ = true
    </script>
  `;
}
