import React from 'react';

import { useStore as Store } from './hooks';
import Dashboard from './components/organisms/Dashboard';

export default function RenderApp() {
  return (
    <Store>
      <Dashboard />
    </Store>
  );
}
