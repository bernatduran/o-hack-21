import React, { Component, Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const StrategicDashboard = lazy(() => import('./pages/dashboard/StrategicDashboard'));
const ItDashboard = lazy(() => import('./pages/dashboard/ItDashboard'));
const AwsDashboard = lazy(() => import('./pages/dashboard/AwsDashboard'));
const InfrastructureDashboard = lazy(() => import('./pages/dashboard/InfrastructureDashboard'));

const FinanceHome = lazy(() => import('./pages/finance/Home'));

const ProductHome = lazy(() => import('./pages/product/Home'));

const HrHome = lazy(() => import('./pages/hr/Home'));

const SalesHome = lazy(() => import('./pages/sales/Home'));
const SalesDetail = lazy(() => import('./pages/sales/Detail'));
const NewSale = lazy(() => import('./pages/sales/NewSale'));

class Routes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard/strategy" component={StrategicDashboard} />
          <Route exact path="/dashboard/it" component={ItDashboard} />
          <Route exact path="/dashboard/aws" component={AwsDashboard} />
          <Route exact path="/dashboard/infrastructure" component={InfrastructureDashboard} />

          <Route path="/finance" component={FinanceHome} />

          <Route path="/product" component={ProductHome} />

          <Route path="/hr" component={HrHome} />

          <Route path="/sales/project/new" component={NewSale} />
          <Route path="/sales/project/:id" component={SalesDetail} />
          <Route path="/sales" component={SalesHome} />

          <Redirect to="/dashboard/strategy" />
        </Switch>
      </Suspense>
    );
  }
}

export default Routes;
