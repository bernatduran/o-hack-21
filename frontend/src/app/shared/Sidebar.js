import { Collapse, Dropdown } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import React, { Component } from 'react';

import { Trans } from 'react-i18next';

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: '/apps', state: 'appsMenuOpen' },
      { path: '/finance', state: 'financeMenuOpen' },
      { path: '/product', state: 'productMenuOpen' },
      { path: '/hr', state: 'hrMenuOpen' },
      { path: '/icons', state: 'iconsMenuOpen' },
      { path: '/sales', state: 'salesMenuOpen' },
      { path: '/user-pages', state: 'userPagesMenuOpen' },
      { path: '/error-pages', state: 'errorPagesMenuOpen' },
    ];

    dropdownPaths.forEach(obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }

  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <a className="sidebar-brand brand-logo" href="index.html">
            <img src={require('../../assets/images/logo.svg')} alt="logo" />
            <p>Ohpen Dashboard</p>
          </a>
          <a className="sidebar-brand brand-logo-mini" href="index.html">
            <img src={require('../../assets/images/logo.svg')} alt="logo" />
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item nav-category">
            <span className="nav-link">
              <Trans>Navigation</Trans>
            </span>
          </li>
          <li
            className={
              this.isPathActive('/dashboard') ? 'nav-item menu-items active' : 'nav-item menu-items'
            }
          >
            <Link className="nav-link" to="/dashboard">
              <span className="menu-icon">
                <i className="mdi mdi-speedometer"></i>
              </span>
              <span className="menu-title">
                <Trans>Dashboard</Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive('/finance') ? 'nav-item menu-items active' : 'nav-item menu-items'
            }
          >
            <div
              className={this.state.financeMenuOpen ? 'nav-link menu-expanded' : 'nav-link'}
              onClick={() => this.toggleMenuState('financeMenuOpen')}
              data-toggle="collapse"
            >
              <span className="menu-icon">
                <i className="mdi mdi-currency-usd"></i>
              </span>
              <span className="menu-title">
                <Trans>Finance</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.financeMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {' '}
                    <Link
                      className={this.isPathActive('/finance') ? 'nav-link active' : 'nav-link'}
                      to="/finance"
                    >
                      <Trans>Home</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {' '}
                    <Link
                      className={
                        this.isPathActive('/finance/costs') ? 'nav-link active' : 'nav-link'
                      }
                      to="/finance/costs"
                    >
                      <Trans>Costs</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {' '}
                    <Link
                      className={
                        this.isPathActive('/finance/income') ? 'nav-link active' : 'nav-link'
                      }
                      to="/finance/income"
                    >
                      <Trans>Income</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive('/product') ? 'nav-item menu-items active' : 'nav-item menu-items'
            }
          >
            <div
              className={this.state.productMenuOpen ? 'nav-link menu-expanded' : 'nav-link'}
              onClick={() => this.toggleMenuState('productMenuOpen')}
              data-toggle="collapse"
            >
              <span className="menu-icon">
                <i className="mdi mdi-dropbox"></i>
              </span>
              <span className="menu-title">
                <Trans>Product</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.productMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {' '}
                    <Link
                      className={this.isPathActive('/product') ? 'nav-link active' : 'nav-link'}
                      to="/product"
                    >
                      <Trans>Home</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive('/hr') ? 'nav-item menu-items active' : 'nav-item menu-items'
            }
          >
            <div
              className={this.state.hrMenuOpen ? 'nav-link menu-expanded' : 'nav-link'}
              onClick={() => this.toggleMenuState('hrMenuOpen')}
              data-toggle="collapse"
            >
              <span className="menu-icon">
                <i className="mdi mdi-account-multiple-outline"></i>
              </span>
              <span className="menu-title">
                <Trans>HR</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.hrMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {' '}
                    <Link
                      className={
                        this.isPathActive('/hr/basic-table') ? 'nav-link active' : 'nav-link'
                      }
                      to="/hr"
                    >
                      <Trans>Home</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive('/sales') ? 'nav-item menu-items active' : 'nav-item menu-items'
            }
          >
            <div
              className={this.state.salesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'}
              onClick={() => this.toggleMenuState('salesMenuOpen')}
              data-toggle="collapse"
            >
              <span className="menu-icon">
                <i className="mdi mdi-cash-multiple"></i>
              </span>
              <span className="menu-title">
                <Trans>Sales</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.salesMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {' '}
                    <Link
                      className={
                        this.isPathActive('/sales/chart-js') ? 'nav-link active' : 'nav-link'
                      }
                      to="/sales/chart-js"
                    >
                      <Trans>Home</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach(el => {
      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }
}

export default withRouter(Sidebar);