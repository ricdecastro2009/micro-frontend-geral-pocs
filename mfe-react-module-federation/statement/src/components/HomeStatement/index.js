import React from 'react';


export default function HomeStatement() {
  const ShellButton = React.lazy(() => import('Shell/Button'));
  return (
    <>
      <h2>Aqui é a Home do Statement</h2>
      <ShellButton></ShellButton>
     </>
  );
}