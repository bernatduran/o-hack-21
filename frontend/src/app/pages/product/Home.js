import { Form } from 'react-bootstrap';
import React from 'react';
import { formatNumber } from '../../helpers/formatNumber';
import { productData } from '../../constants/ProductLanding';
import { projectNames } from '../../constants/salesDetail';

const ProductHome = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Product</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">Product</li>
            <li className="breadcrumb-item active" aria-current="page">
              Home
            </li>
          </ol>
        </nav>
      </div>
      <div className="row ">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <form className="form-sample">
                <div className="container-fluid d-flex mb-4">
                  <Form.Group className="col-2 mb-0">
                    <select className="form-control">
                      <option hidden>Team</option>
                      <option>Sentinel</option>
                      <option>CRM</option>
                      <option>Portals</option>
                      <option>Investments</option>
                      <option>Payments</option>
                      <option>HUBSA</option>
                    </select>
                  </Form.Group>
                  <Form.Group className="col-2 mb-0">
                    <select className="form-control">
                      <option hidden>Project</option>
                      {projectNames.map(name => (
                        <option key={name}>{name}</option>
                      ))}
                    </select>
                  </Form.Group>
                  <Form.Group className="col-2 mb-0">
                    <Form.Control type="date" />
                  </Form.Group>
                  <button className="btn btn-success  create-new-button">Apply filters</button>
                </div>
                <div className="row">
                  <div className="table-responsive">
                    <table className="table text-center" style={{ tableLayout: 'fixed' }}>
                      <thead>
                        <tr>
                          <th>AHA Scroe</th>
                          <th>Cost</th>
                          <th>Man/Hours Estimation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{1200}</td>
                          <td>{formatNumber(45000)}</td>
                          <td>1500</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </form>
              <div className="row w-100 mt-5 d-flex flex-column">
                <h3>AHA</h3>
                <img
                  src={require('../../../assets/images/product/aha.png')}
                  alt="aha"
                  style={{ width: '80%', margin: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h3>Involved Releases</h3>
              <div className="table-responsive">
                <table className="table" style={{ tableLayout: 'fixed' }}>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Not started</th>
                      <th>WiP</th>
                      <th>Done</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productData.involvedReleases.map(release => (
                      <tr key={release.id}>
                        <td>{release.release}</td>
                        <td className={release.notStarted !== '0%' ? 'text-danger' : ''}>
                          {release.notStarted}
                        </td>
                        <td className={release.wip !== '0%' ? 'text-warning' : ''}>
                          {release.wip}
                        </td>
                        <td className={release.done !== '0%' ? 'text-success' : ''}>
                          {release.done}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h3>JIRA</h3>
              <div className="table-responsive">
                <table className="table " style={{ tableLayout: 'fixed' }}>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Story Points</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productData.jiraTickets.map(ticket => (
                      <tr key={ticket.id}>
                        <td>{ticket.name}</td>
                        <td>{ticket.storyPoints}</td>
                        <td className={ticket.status === 'Done' ? 'text-success' : ''}>
                          {ticket.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHome;
