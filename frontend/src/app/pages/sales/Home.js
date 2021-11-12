import React, { useState } from 'react';

const initialData = {
  currentProspects: [
    {
      id: 1,
      projectName: 'The DEVOPS Project',
      location: 'Amsterdam',
      lead: 'Chuck Norris',
      launchDate: 'January 2025',
      rag: 'green',
    },
    {
      id: 2,
      projectName: 'Newsletter',
      location: 'Berlin',
      lead: 'Ron Burgundy',
      launchDate: 'August 2028',
      rag: 'amber',
    },
    {
      id: 3,
      projectName: 'Psycho',
      location: 'London',
      lead: 'Patrick Bateman',
      launchDate: 'December 2025',
      rag: 'green',
    },
    {
      id: 4,
      projectName: 'Quarter Pounder',
      location: 'Paris',
      lead: 'Jules Winnfield',
      launchDate: 'February 2026',
      rag: 'red',
    },
    {
      id: 5,
      projectName: 'Bogeyman',
      location: 'Viena',
      lead: 'Keyser Söze',
      launchDate: 'August 2027',
      rag: 'amber',
    },
  ],
  currentProjects: [],
};

const Home = () => {
  const [data, setData] = useState(initialData);

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Sales</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">Sales</li>
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
              <h4 className="card-title">Current Prospects</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th> Project Name </th>
                      <th> Location </th>
                      <th> Lead </th>
                      <th> Launch Date </th>
                      <th> RAG </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.currentProspects.map(project => (
                      <tr key={project.id}>
                        <td>
                          <a className="" href={`/sales/${project.id}`}>
                            {project.projectName}
                          </a>
                        </td>
                        <td>{project.location}</td>
                        <td>{project.lead}</td>
                        <td>{project.launchDate}</td>
                        <td>
                          <div
                            className={`badge w-50 badge-outline-${
                              project.rag === 'red'
                                ? 'danger'
                                : project.rag === 'green'
                                ? 'success'
                                : 'warning'
                            }`}
                          >
                            {project.rag.toUpperCase()}
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
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Current Projects</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th> Project Name </th>
                      <th> Location </th>
                      <th> Lead </th>
                      <th> Launch Date </th>
                      <th> RAG </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.currentProjects.map(project => (
                      <tr key={project.id}>
                        <td>
                          <a className="" href={`/sales/${project.id}`}>
                            {project.projectName}
                          </a>
                        </td>
                        <td>{project.location}</td>
                        <td>{project.lead}</td>
                        <td>{project.launchDate}</td>
                        <td>
                          <div
                            className={`badge w-50 badge-outline-${
                              project.rag === 'red'
                                ? 'danger'
                                : project.rag === 'green'
                                ? 'success'
                                : 'warning'
                            }`}
                          >
                            {project.rag.toUpperCase()}
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
    </div>
  );
};

export default Home;
