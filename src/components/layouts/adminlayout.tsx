import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faTasks, faCalendarAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import '../CSS/Navbar.css'

const MyComponent = () => {
  return (
    <FontAwesomeIcon icon={faReact} />
  );
}


const AdminLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="layout d-flex " >
      <button className="btn btn-primary position-fixed top-0 start-0 m-3 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
        <FontAwesomeIcon icon={faChartBar} />
      </button>

      <div className="offcanvas offcanvas-start gradient-custom" data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
        <h5 className="offcanvas-title i" id="offcanvasWithBothOptionsLabel">
        <FontAwesomeIcon icon={faReact} style={{ fontSize: '5em' }}/>
React.js
        </h5>


        </div>
        <div className="offcanvas-body">
          <nav className="sidebar">
            <ul className="nav flex-column">
              <li className="nav-item">
                
                <Link className="nav-link" to="/admindashboard">
                  <FontAwesomeIcon icon={faChartBar} /> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tasks">
                  <FontAwesomeIcon icon={faTasks} /> Tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/calendar">
                  <FontAwesomeIcon icon={faCalendarAlt} /> Calendar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">
                  <FontAwesomeIcon icon={faUsers} /> Team
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Render the children */}
      <div className="flex-grow-1 ">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
