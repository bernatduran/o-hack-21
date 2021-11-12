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
    expectedIncome: 0,
    currentIncome: 0,
    expectedOutcome: 0,
    currentOutcome: 0,
  },
  q2: {
    expectedIncome: 0,
    currentIncome: 0,
    expectedOutcome: 0,
    currentOutcome: 0,
  },
  q3: {
    expectedIncome: 0,
    currentIncome: 0,
    expectedOutcome: 0,
    currentOutcome: 0,
  },
  q4: {
    expectedIncome: 0,
    currentIncome: 0,
    expectedOutcome: 0,
    currentOutcome: 0,
  },
};

const quarters = ['q1', 'q2', 'q3', 'q4'];

const Home = () => {
  const [data, setData] = useState(initialBalance);
  const [quarterData, setQuarterData] = useState(initialQarters);

  useEffect(() => {
    getBalance().then(data => setData(data));
    getQuarters().then(data => setQuarterData(data));
  }, []);

  return (
    <div>
      <div className="page-header">
        {console.log('DATA!!!!!!!!!!!', quarterData)}
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
            ((quarterData[quarter].currentIncome - quarterData[quarter].expectedIncome) /
              quarterData[quarter].expectedIncome) *
            100;
          const outcomePercent =
            ((quarterData[quarter].currentOutcome - quarterData[quarter].expectedIncome) /
              quarterData[quarter].expectedOutcome) *
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
                          <th colSpan="2">Outcome</th>
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
                            <b>{formatNumber(quarterData[quarter].expectedIncome)}</b>
                          </td>
                          <td>
                            <div className=" d-flex">
                              <b>{formatNumber(quarterData[quarter].currentIncome)}</b>
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
                            <b>{formatNumber(quarterData[quarter].expectedOutcome)}</b>
                          </td>
                          <td>
                            <div className=" d-flex">
                              <b>{formatNumber(quarterData[quarter].currentOutcome)}</b>
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
                        <tr>
                          <td>HR</td>
                          <td>{formatNumber(quarterData[quarter].expectedIncome * 0.15)}</td>
                          <td>
                            <div className=" d-flex">
                              {formatNumber(quarterData[quarter].currentIncome * 0.15)}
                              <p
                                className={`${
                                  incomePercent >= 1 ? 'text-success' : 'text-danger'
                                } ml-2 mb-0 font-weight-medium`}
                              >
                                ({(25).toFixed(2)}%)
                              </p>
                            </div>
                          </td>
                          <td>{formatNumber(quarterData[quarter].expectedOutcome * 0.15)}</td>
                          <td>
                            <div className=" d-flex">
                              {formatNumber(quarterData[quarter].currentOutcome * 0.15)}
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
                        <tr>
                          <td>Real State</td>
                          <td>{formatNumber(quarterData[quarter].expectedIncome * 0.3)}</td>
                          <td>
                            <div className=" d-flex">
                              {formatNumber(quarterData[quarter].currentIncome * 0.3)}
                              <p
                                className={`${
                                  incomePercent >= 1 ? 'text-success' : 'text-danger'
                                } ml-2 mb-0 font-weight-medium`}
                              >
                                ({incomePercent.toFixed(2)}%)
                              </p>
                            </div>
                          </td>
                          <td>{formatNumber(quarterData[quarter].expectedOutcome * 0.3)}</td>
                          <td>
                            <div className=" d-flex">
                              {formatNumber(quarterData[quarter].currentOutcome * 0.3)}
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
                        <tr>
                          <td>AWS</td>
                          <td>{formatNumber(quarterData[quarter].expectedIncome * 0.2)}</td>
                          <td>
                            <div className=" d-flex">
                              {formatNumber(quarterData[quarter].currentIncome * 0.2)}
                              <p
                                className={`${
                                  incomePercent >= 1 ? 'text-success' : 'text-danger'
                                } ml-2 mb-0 font-weight-medium`}
                              >
                                ({incomePercent.toFixed(2)}%)
                              </p>
                            </div>
                          </td>
                          <td>{formatNumber(quarterData[quarter].expectedOutcome * 0.2)}</td>
                          <td>
                            <div className=" d-flex">
                              {formatNumber(quarterData[quarter].currentOutcome * 0.2)}
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
                        <tr>
                          <td>Services</td>
                          <td>{formatNumber(quarterData[quarter].expectedIncome * 0.35)}</td>
                          <td>
                            <div className=" d-flex">
                              {formatNumber(quarterData[quarter].currentIncome * 0.35)}
                              <p
                                className={`${
                                  incomePercent >= 1 ? 'text-success' : 'text-danger'
                                } ml-2 mb-0 font-weight-medium`}
                              >
                                ({incomePercent.toFixed(2)}%)
                              </p>
                            </div>
                          </td>
                          <td>{formatNumber(quarterData[quarter].expectedOutcome * 0.35)}</td>
                          <td>
                            <div className=" d-flex">
                              {formatNumber(quarterData[quarter].currentOutcome * 0.35)}
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
