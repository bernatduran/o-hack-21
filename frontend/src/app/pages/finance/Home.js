import React, { useEffect, useState } from 'react';
import { getBalance, getQuarters } from '../../services/API';
import { initialBalance, initialQarters, quarters, sections } from '../../constants/finance';

import { formatNumber } from '../../helpers/formatNumber';

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
          console.log(quarterData);
          const incomePercent =
            ((quarterData[quarter].total.currentIncome -
              quarterData[quarter].total.expectedIncome) /
              (quarterData[quarter].total.expectedIncome || 1)) *
            100;
          const outcomePercent =
            ((quarterData[quarter].total.currentOutcome -
              quarterData[quarter].total.expectedOutcome) /
              (quarterData[quarter].total.expectedOutcome || 1)) *
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
                              {incomePercent ? (
                                <p
                                  className={`${
                                    incomePercent >= 1 ? 'text-success' : 'text-danger'
                                  } ml-2 mb-0 font-weight-medium`}
                                >
                                  ({incomePercent > 0 ? '+' : ''}
                                  {incomePercent.toFixed(2)}%)
                                </p>
                              ) : (
                                <p className="ml-2 mb-0 font-weight-medium">(-)</p>
                              )}
                            </div>
                          </td>
                          <td>
                            <b>{formatNumber(quarterData[quarter].total.expectedOutcome)}</b>
                          </td>
                          <td>
                            <div className=" d-flex">
                              <b>{formatNumber(quarterData[quarter].total.currentOutcome)}</b>
                              {outcomePercent ? (
                                <p
                                  className={`${
                                    outcomePercent >= 1 ? 'text-success' : 'text-danger'
                                  } ml-2 mb-0 font-weight-medium`}
                                >
                                  ({outcomePercent > 0 ? '+' : ''}
                                  {outcomePercent.toFixed(2)}%)
                                </p>
                              ) : (
                                <p className="ml-2 mb-0 font-weight-medium">(-)</p>
                              )}
                            </div>
                          </td>
                        </tr>
                        {sections.map(section => {
                          const incomePercent =
                            ((quarterData[quarter][section].currentIncome -
                              quarterData[quarter][section].expectedIncome) /
                              (quarterData[quarter][section].expectedIncome || 1)) *
                            100;
                          const outcomePercent =
                            ((quarterData[quarter][section].currentOutcome -
                              quarterData[quarter][section].expectedOutcome) /
                              (quarterData[quarter][section].expectedOutcome || 1)) *
                            100;
                          return (
                            <tr>
                              <td>{section}</td>
                              <td>{formatNumber(quarterData[quarter][section].expectedIncome)}</td>
                              <td>
                                <div className=" d-flex">
                                  {formatNumber(quarterData[quarter][section].currentIncome)}
                                  {incomePercent ? (
                                    <p
                                      className={`${
                                        incomePercent >= 1 ? 'text-success' : 'text-danger'
                                      } ml-2 mb-0 font-weight-medium`}
                                    >
                                      ({incomePercent > 0 ? '+' : ''}
                                      {incomePercent.toFixed(2)}%)
                                    </p>
                                  ) : (
                                    <p className="ml-2 mb-0 font-weight-medium">(-)</p>
                                  )}
                                </div>
                              </td>
                              <td>{formatNumber(quarterData[quarter][section].expectedOutcome)}</td>
                              <td>
                                <div className=" d-flex">
                                  {formatNumber(quarterData[quarter][section].currentOutcome)}
                                  {outcomePercent ? (
                                    <p
                                      className={`${
                                        outcomePercent >= 1 ? 'text-success' : 'text-danger'
                                      } ml-2 mb-0 font-weight-medium`}
                                    >
                                      ({outcomePercent > 0 ? '+' : ''}
                                      {outcomePercent.toFixed(2)}%)
                                    </p>
                                  ) : (
                                    <p className="ml-2 mb-0 font-weight-medium">(-)</p>
                                  )}
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
