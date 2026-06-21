import React from 'react';

export default function App() {
  // O bundle exportado (index-DKrfd9iT.js.download) já monta a UI real em #root.
  // Este componente existe apenas para manter um projeto Vite+React coerente.
  // Se o bundle não rodar, mostramos uma mensagem simples.
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        background: '#080f1e'
      }}
    >
      Reconstrução iniciada.
    </div>
  );
}

