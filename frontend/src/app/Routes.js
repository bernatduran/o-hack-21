import React, { Component, Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));

const FinanceHome = lazy(() => import('./pages/finance/Home'));

const ProductHome = lazy(() => import('./pages/product/Home'));

const HrHome = lazy(() => import('./pages/hr/Home'));

const SalesHome = lazy(() => import('./pages/sales/Home'));

class Routes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />

          <Route path="/finance/" component={FinanceHome} />

          <Route path="/product" component={ProductHome} />

          <Route path="/hr" component={HrHome} />

          <Route path="/sales" component={SalesHome} />

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default Routes;
