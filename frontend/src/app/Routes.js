import React, { Component, Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const FinanceHome = lazy(() => import('./pages/finance/Home'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));

class Routes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />

          <Route path="/finance/costs" component={Dropdowns} />
          <Route path="/finance/income" component={Typography} />
          <Route path="/finance/" component={FinanceHome} />

          <Route path="/product" component={BasicElements} />

          <Route path="/hr" component={BasicTable} />
          <Route path="/sales" component={ChartJs} />

          <Route path="/icons/mdi" component={Mdi} />

          <Route path="/user-pages/login-1" component={Login} />
          <Route path="/user-pages/register-1" component={Register1} />

          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default Routes;