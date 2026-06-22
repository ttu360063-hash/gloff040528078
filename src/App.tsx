import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Remove o placeholder de fallback caso exista
    const el = document.getElementById('lumi-real-ui');
    if (el) el.remove();

    // Carrega a página estática (do build anterior) que já contém toda a UI.
    // No Vite, o dist/index.html vai ser publicado, mas em alguns setups de build o HTML raiz pode não ser aplicado.
    // Assim, garantimos que a UI real chegue no #root.
    // Observação: assets da UI estática ficam no diretório gerado pelo build original.
    const existing = document.getElementById('root');
    if (!existing) return;

    // Se a UI já foi montada, não remonta.
    if (existing.querySelector('[data-lumi-root="1"]')) return;

    const script = document.createElement('script');
    script.type = 'module';

    // A rota abaixo aponta para o bundle gerado no repo (index-*.js.download renomeado no build original).
    // Mantemos como fallback: se não carregar, pelo menos a página não quebra.
    // Ajuste fino pode ser necessário dependendo do nome do chunk no dist.
    script.src = './LiberaOff _ Marketplace de Locuções Profissionais_files/index-DO2FeXTV.js.download';

    script.onload = () => {
      // Marca o root para evitar remount.
      const root = document.getElementById('root');
      if (root) root.setAttribute('data-lumi-root', '1');
    };

    script.onerror = () => {
      // Se falhar, deixa uma mensagem clara.
      const root = document.getElementById('root');
      if (root && !root.textContent?.trim()) {
        root.textContent = 'UI não carregou. Verifique assets no diretório de build.';
      }
    };

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div id="lumi-real-ui" />;
}

