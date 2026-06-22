// Loads and mounts the already-built static UI bundle into #root.
// This is required for environments like Vercel where the original entry HTML
// may not include the correct script assets.

export async function loadLumiRealUI(): Promise<void> {
  const root = document.getElementById('root');
  if (!root) return;

  // Avoid double-mount
  if (root.getAttribute('data-lumi-mounted') === '1') return;

  // Dynamically discover the built chunk referenced by dist/index.html.
  // Vite emits a hashed filename like /assets/index-<hash>.js.
  const src = (() => {
    const match = document
      .querySelector<HTMLScriptElement>('script[src*="/assets/index-"]')
      ?.getAttribute('src')
      ?.match(/\/assets\/index-[^/]+\.js$/);

    // Fallback: keep a sensible default for local runs.
    return match ? match[0] : '/assets/index-JFkn41YH.js';
  })();

  await new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'module';
    script.crossOrigin = 'anonymous';
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });

  root.setAttribute('data-lumi-mounted', '1');
}

