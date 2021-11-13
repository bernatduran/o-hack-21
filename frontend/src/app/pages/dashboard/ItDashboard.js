import React from 'react';

const Itdashboard = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">IT Monitoring</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">Dashboard</li>
            <li className="breadcrumb-item active" aria-current="page">
              IT Monitoring
            </li>
          </ol>
        </nav>
      </div>
      <div className="col-12 grid-margin">
        <img
          className="w-100"
          src={require('../../../assets/images/dashboard/it-project.png')}
          alt=""
        />
      </div>
    </div>
  );
};

export default Itdashboard;
