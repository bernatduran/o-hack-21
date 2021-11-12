import React, { useEffect, useState } from 'react';
import { getBalance, getQuarters } from '../../services/API';

import { formatNumber } from '../../helpers/formatNumber';

const initialBalance = {
  balance: 0,
  variationFromPreviousMonth: 0,
  variationFromPreviousDay: 0,
};

const initialQarters = {
  q1: {
    total: {
      expectedIncome: 0,
      currentIncome: 0,
      expectedOutcome: 0,
      currentOutcome: 0,
    },
    hr: {
      expectedIncome: 0,
      currentIncome: 0,
      expectedOutcome: 0,
      currentOutcome: 0,
    },
    realState: {
      expectedIncome: 0,
      currentIncome: 0,
      expectedOutcome: 0,
      currentOutcome: 0,
    },
    services: {
      expectedIncome: 0,
      currentIncome: 0,
      expectedOutcome: 0,
      currentOutcome: 0,
    },
  },
  q2: {
    total: {
      expectedIncome: 0,
      currentIncome: 0,
      expectedOutcome: 0,
      currentOutcome: 0,
    },
    hr: {
      expectedIncome: 0,
      currentIncome: 0,
      expectedOutcome: 0,
      currentOutcome: 0,
    },
    realState: {
      expectedIncome: 0,
      currentIncome: 0,
      expectedOutcome: 0,
      currentOutcome: 0,
    },
    services: {
      expectedIncome: 0,
      currentIncome: 0,
      expectedOutcome: 0,
      currentOutcome: 0,
    },
  },
  q3: {
    total: {
      expectedIncome: 0,
      currentIncome: 0,
      expectedOutcome: 0,
      currentOutcome: 0,
    },
    hr: {
      expectedIncome: 0,
      currentIncome: 0,
      expectedOutcome: 0,
      currentOutcome: 0,
    },
    realState: {
      expectedIncome: 0,
      currentIncome: 0,
      expectedOutcome: 0,
      currentOutcome: 0,
    },
    services: {
      expectedIncome: 0,
      currentIncome: 0,
      expectedOutcome: 0,
      currentOutcome: 0,
    },
  },
  q4: {
    total: {
      expectedIncome: 0,
      currentIncome: 0,
      expectedOutcome: 0,
      currentOutcome: 0,
    },
    hr: {
      expectedIncome: 0,
      currentIncome: 0,
      expectedOutcome: 0,
      currentOutcome: 0,
    },
    realState: {
      expectedIncome: 0,
      currentIncome: 0,
      expectedOutcome: 0,
      currentOutcome: 0,
    },
    services: {
      expectedIncome: 0,
      currentIncome: 0,
      expectedOutcome: 0,
      currentOutcome: 0,
    },
  },
};

const quarters = ['q1', 'q2', 'q3', 'q4'];
const sections = ['hr', 'realState', 'services'];

const Home = () => {
  const [data, setData] = useState(initialBalance);
  const [quarterData, setQuarterData] = useState(initialQarters);

  useEffect(() => {
    getBalance().then(data => setData(data));
    // getQuarters().then(data => setQuarterData(data));
  }, []);

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Finance</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">Finance</li>
            <li className="breadcrumb-item active" aria-current="page">
              Home
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-lg-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="d-flex d-sm-block d-md-flex justify-content-between align-items-center">
                <h2 className="card-title" style={{ marginBottom: '0' }}>
                  Current balance
                </h2>
                <div className="d-flex d-sm-block d-md-flex flex-column">
                  <div className="d-flex d-sm-block d-md-flex">
                    <h2 className="mb-0">{formatNumber(data.balance)}</h2>
                    <p className="text-success ml-2 mb-0 font-weight-medium">
                      +{data.variationFromPreviousDay}%
                    </p>
                  </div>
                  <h6 className="text-muted font-weight-normal">
                    {data.variationFromPreviousMonth}% Since last month
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {quarters.map(quarter => {
          const incomePercent =
            ((quarterData[quarter].total.currentIncome -
              quarterData[quarter].total.expectedIncome) /
              quarterData[quarter].total.expectedIncome) *
            100;
          const outcomePercent =
            ((quarterData[quarter].total.currentOutcome -
              quarterData[quarter].total.expectedIncome) /
              quarterData[quarter].total.expectedOutcome) *
            100;
          return (
            <div key={quarter} className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">{quarter}</h4>
                  <div className="table-responsive">
                    <table className="table table-hover text-center">
                      <thead>
                        <tr>
                          <th></th>
                          <th colSpan="2">Income</th>
                          <th colSpan="2">Costs</th>
                        </tr>
                        <tr>
                          <th></th>
                          <th>Expected</th>
                          <th>Current</th>
                          <th>Expected</th>
                          <th>Current</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <b>TOTAL</b>
                          </td>
                          <td>
                            <b>{formatNumber(quarterData[quarter].total.expectedIncome)}</b>
                          </td>
                          <td>
                            <div className=" d-flex">
                              <b>{formatNumber(quarterData[quarter].total.currentIncome)}</b>
                              <p
                                className={`${
                                  incomePercent >= 1 ? 'text-success' : 'text-danger'
                                } ml-2 mb-0 font-weight-medium`}
                              >
                                ({incomePercent.toFixed(2)}%)
                              </p>
                            </div>
                          </td>
                          <td>
                            <b>{formatNumber(quarterData[quarter].total.expectedOutcome)}</b>
                          </td>
                          <td>
                            <div className=" d-flex">
                              <b>{formatNumber(quarterData[quarter].total.currentOutcome)}</b>
                              <p
                                className={`${
                                  outcomePercent >= 1 ? 'text-success' : 'text-danger'
                                } ml-2 mb-0 font-weight-medium`}
                              >
                                ({outcomePercent.toFixed(2)}%)
                              </p>
                            </div>
                          </td>
                        </tr>
                        {sections.map(section => {
                          const qncomePercent =
                            ((quarterData[quarter][section].currentIncome -
                              quarterData[quarter][section].expectedIncome) /
                              quarterData[quarter][section].expectedIncome) *
                            100;
                          const outcomePercent =
                            ((quarterData[quarter][section].currentOutcome -
                              quarterData[quarter][section].expectedIncome) /
                              quarterData[quarter][section].expectedOutcome) *
                            100;
                          return (
                            <tr>
                              <td>{section}</td>
                              <td>{formatNumber(quarterData[quarter][section].expectedIncome)}</td>
                              <td>
                                <div className=" d-flex">
                                  {formatNumber(quarterData[quarter][section].currentIncome)}
                                  <p
                                    className={`${
                                      incomePercent >= 1 ? 'text-success' : 'text-danger'
                                    } ml-2 mb-0 font-weight-medium`}
                                  >
                                    ({incomePercent.toFixed(2)}%)
                                  </p>
                                </div>
                              </td>
                              <td>{formatNumber(quarterData[quarter][section].expectedOutcome)}</td>
                              <td>
                                <div className=" d-flex">
                                  {formatNumber(quarterData[quarter][section].currentOutcome)}
                                  <p
                                    className={`${
                                      outcomePercent >= 1 ? 'text-success' : 'text-danger'
                                    } ml-2 mb-0 font-weight-medium`}
                                  >
                                    ({outcomePercent.toFixed(2)}%)
                                  </p>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
