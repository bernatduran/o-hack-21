import React from 'react';
import { hrData } from '../../constants/hrLanding';

const Home = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">HR</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">HR</li>
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
              <h4 className="card-title">Talent Acquisition</h4>
              <div className="row">
                <div className="table-responsive">
                  <table className="table text-center" style={{ tableLayout: 'fixed' }}>
                    <thead>
                      <tr>
                        <th>Candidate</th>
                        <th>Role</th>
                        <th>Cultural Fit</th>
                        <th>Tech Assign</th>
                        <th>Peer Program</th>
                        <th>Offer Made</th>
                        <th>Screening OK</th>
                        <th>Hired</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hrData.hiring.map(candidate => (
                        <tr key={candidate.id}>
                          <td>{candidate.name}</td>
                          <td>{candidate.role}</td>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                defaultChecked={candidate.hiringStatus.culturalFit}
                                className="form-check-input"
                              />
                              <i className="input-helper"></i>
                            </div>
                          </td>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                defaultChecked={candidate.hiringStatus.techAssignment}
                                className="form-check-input"
                              />
                              <i className="input-helper"></i>
                            </div>
                          </td>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                defaultChecked={candidate.hiringStatus.peerReview}
                                className="form-check-input"
                              />
                              <i className="input-helper"></i>
                            </div>
                          </td>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                defaultChecked={candidate.hiringStatus.offerMade}
                                className="form-check-input"
                              />
                              <i className="input-helper"></i>
                            </div>
                          </td>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                defaultChecked={candidate.hiringStatus.screenOk}
                                className="form-check-input"
                              />
                              <i className="input-helper"></i>
                            </div>
                          </td>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                defaultChecked={candidate.hiringStatus.hired}
                                className="form-check-input"
                              />
                              <i className="input-helper"></i>
                            </div>
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
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">HR Today</h4>
              <div className="row grid-margin ml-1">
                Current Ohpeneers:&nbsp;<b>467</b>
              </div>
              <div className="row">
                <div className="col-6 grid-margin">
                  <h5>
                    New Hires <span>😊</span>
                  </h5>
                  <ul style={{ listStyleType: 'none' }}>
                    {hrData.newHires.map(person => (
                      <li key={person.id}>{person.description}</li>
                    ))}
                  </ul>
                  <h5>
                    Leavers <span>😢</span>
                  </h5>
                  <ul style={{ listStyleType: 'none' }}>
                    {hrData.leavers.map(person => (
                      <li key={person.id}>{person.description}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-6 grid-margin">
                  <h5>Birthdays this month</h5>
                  <ul style={{ listStyleType: 'none' }}>
                    {hrData.upcomingBirthdays.map(person => (
                      <li key={person.id}>
                        {person.name}:&nbsp;<b>{person.date}</b>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
