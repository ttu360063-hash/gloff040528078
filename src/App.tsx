import React, { useEffect } from 'react';
import { loadLumiRealUI } from './lumi-real-ui';

export default function App() {
  useEffect(() => {
    loadLumiRealUI().catch(() => {
      const root = document.getElementById('root');
      if (root && !root.textContent?.trim()) {
        root.textContent = 'UI não carregou. Verifique assets no diretório de build.';
      }
    });
  }, []);

  return <div id="lumi-real-ui" />;
}

