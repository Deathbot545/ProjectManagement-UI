import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faTasks, faCalendarAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

const UserLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="layout d-flex">
      <button className="btn btn-primary position-fixed top-0 start-0 m-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
        <FontAwesomeIcon icon={faChartBar} />
      </button>

      <div className="offcanvas offcanvas-start" data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <nav className="sidebar">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to="/userdashboard">
                  <FontAwesomeIcon icon={faChartBar} /> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/usertasks">
                  <FontAwesomeIcon icon={faTasks} /> Tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/userschedules">
                  <FontAwesomeIcon icon={faCalendarAlt} /> Schedules
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/userteam">
                  <FontAwesomeIcon icon={faUsers} /> Team
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Render the children */}
      <div className="flex-grow-1">
        {children}
      </div>
    </div>
  );
};

export default UserLayout;
