import React, { useState } from 'react';
import { projectNames, salesDetail } from '../../constants/salesDetail';

import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Home = () => {
  const [newRequirements, setNewRequirements] = useState(salesDetail.gapAnalysis.newRequirements);
  const [teamResources, setTeamResources] = useState({
    architect: 0,
    developer: 0,
    qa: 0,
    po: 0,
  });
  const { id } = useParams();
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">{projectNames[id - 1]}</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/sales">Sales</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {projectNames[id - 1]}
            </li>
          </ol>
        </nav>
      </div>
      <div className="row ">
        <div className="col-4 grid-margin">
          <div className="card">
            <div className="card-body">
              <h3>Gap analysis</h3>
              <h4 className="mt-4">API Calls</h4>
              <div className="card bg-dark">
                <div className="card-body">
                  {Object.keys(salesDetail.gapAnalysis.apiCalls).map(module => (
                    <div key={module} className="row">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            defaultChecked={salesDetail.gapAnalysis.apiCalls[module]}
                            className="form-check-input"
                          />
                          <i className="input-helper"></i>
                          {module}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <h4 className="mt-4">New Requirements</h4>
              {newRequirements.map(req => (
                <Form.Group key={req.id} className="row">
                  <Form.Control type="text" defaultValue={req.description} />
                </Form.Group>
              ))}
              <button
                className="btn btn-secondary"
                onClick={() => setNewRequirements(prev => [...prev, ''])}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="col-8 grid-margin">
          <div className="card mb-4">
            <div className="card-body">
              <h3>Prospected Resources</h3>
              <div className="table-responsive">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Architect</th>
                      <th>Developers</th>
                      <th>QAs</th>
                      <th>POs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Available</td>
                      <td>
                        {salesDetail.gapAnalysis.projectedResources.architect -
                          teamResources.architect}
                      </td>
                      <td>
                        {salesDetail.gapAnalysis.projectedResources.developer -
                          teamResources.developer}
                      </td>
                      <td>{salesDetail.gapAnalysis.projectedResources.qa - teamResources.qa}</td>
                      <td>{salesDetail.gapAnalysis.projectedResources.po - teamResources.po}</td>
                    </tr>
                    <tr>
                      <td>Team</td>
                      <td>
                        <Form.Group className="row">
                          <div className="col">
                            <Form.Control
                              type="number"
                              min="0"
                              max={salesDetail.gapAnalysis.projectedResources.architect}
                              value={teamResources.architect}
                              onChange={({ target }) =>
                                setTeamResources(prev => ({ ...prev, architect: target.value }))
                              }
                            />
                          </div>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group className="row">
                          <div className="col">
                            <Form.Control
                              type="number"
                              min="0"
                              max={salesDetail.gapAnalysis.projectedResources.developer}
                              value={teamResources.developer}
                              onChange={({ target }) =>
                                setTeamResources(prev => ({ ...prev, developer: target.value }))
                              }
                            />
                          </div>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group className="row">
                          <div className="col">
                            <Form.Control
                              type="number"
                              min="0"
                              max={salesDetail.gapAnalysis.projectedResources.qa}
                              value={teamResources.qa}
                              onChange={({ target }) =>
                                setTeamResources(prev => ({ ...prev, qa: target.value }))
                              }
                            />
                          </div>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group className="row">
                          <div className="col">
                            <Form.Control
                              type="number"
                              min="0"
                              max={salesDetail.gapAnalysis.projectedResources.po}
                              value={teamResources.po}
                              onChange={({ target }) =>
                                setTeamResources(prev => ({ ...prev, po: target.value }))
                              }
                            />
                          </div>
                        </Form.Group>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3>Projected Infra</h3>
              <img
                src={require('../../../assets/images/sales/aws-infra.png')}
                style={{ width: '70%', margin: '0 15%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
