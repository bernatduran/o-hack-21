import { Form } from 'react-bootstrap';
import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Create New Project</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/sales">Sales</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              New Project
            </li>
          </ol>
        </nav>
      </div>
      <div className="row ">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <form className="form-sample">
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Name</label>
                      <div className="col-sm-9">
                        <Form.Control type="text" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Number of Accounts</label>
                      <div className="col-sm-9">
                        <Form.Control type="text" />
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Country</label>
                      <div className="col-sm-9">
                        <Form.Control type="text" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Number of Transactions / year
                      </label>
                      <div className="col-sm-9">
                        <Form.Control type="text" />
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <p className="card-description">Prospection Type</p>
                <div className="row">
                  <div className="form-check mr-5">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      Savings
                    </label>
                  </div>
                  <div className="form-check mr-5">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      Investments
                    </label>
                  </div>
                  <div className="form-check mr-5">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      Mortgages
                    </label>
                  </div>
                  <div className="form-check mr-5">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      Loans
                    </label>
                  </div>
                  <div className="form-check mr-5">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      Custom
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 grid-margin d-flex justify-content-end">
          <button className="btn btn-success create-new-button mr-2">
            <a href="/sales">Save</a>
          </button>
          <button className="btn btn-outline-warning create-new-button">
            <a href="/sales">Cancel</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
