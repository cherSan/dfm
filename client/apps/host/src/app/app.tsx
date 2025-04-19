import * as React from 'react';
import {Link, Navigate, Route, Routes} from 'react-router';
import { loadRemote } from '@module-federation/enhanced/runtime';
import {usePassport} from "@dfm/core/dist";

const Authorization = React.lazy(() => loadRemote('authorization/Module') as any);
const Portfolio = React.lazy(() => loadRemote('portfolio/Module') as any);
const Dashboard = React.lazy(() => loadRemote('dashboard/Module') as any);
const Wallet = React.lazy(() => loadRemote('wallet/Module') as any);
const Profiler = React.lazy(() => loadRemote('profiler/Module') as any);
const Analysis = React.lazy(() => loadRemote('analysis/Module') as any);

export function App() {
  const { user } = usePassport();

  if (!user) {
    return (
      <React.Suspense fallback={null}>
        <Route path="/" element={<Authorization />} />
        <Route path="*" element={<Navigate to={'/'} replace={true} />} />
      </React.Suspense>
    )
  }

  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/authorization">Authorization</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/wallet">Wallet</Link>
        </li>
        <li>
          <Link to="/profiler">Profiler</Link>
        </li>
        <li>
          <Link to="/analysis">Analysis</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={'MAIN'} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/profiler" element={<Profiler />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
