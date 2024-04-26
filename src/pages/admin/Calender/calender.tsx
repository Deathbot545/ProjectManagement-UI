import React from 'react';
import AdminLayout from '../../../components/layouts/adminlayout';
import './calender.css';

const Calender:React.FC=()=>{
    return(
<AdminLayout>

<div className="container">
<div className="w-95 w-md-75 w-lg-60 w-xl-55 mx-auto mb-6 text-center">
<h2 className="display-18 display-md-16 display-lg-14 mb-0">Calender<span className="text-primary">#Timetable</span></h2>
</div>
<div className="row">
<div className="col-md-12">
<div className="schedule-table">
<table className="table bg-white">
<thead>
<tr>
      <th>Project</th>
      <th>10 am</th>
      <th>11 am</th>
      <th>03 pm</th>
      <th>05 pm</th>
      <th className="last">07 pm</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="day">Sunday</td>
      <td className="active">
        <h4>Project Kickoff</h4>
        <p>10 am - 11 am</p>
        <div className="hover">
          <h4>Project Kickoff</h4>
          <p>10 am - 11 am</p>
          <span>Wayne Ponce</span>
        </div>
      </td>
      <td></td>
      <td className="active">
        <h4>Requirements Gathering</h4>
        <p>03 pm - 04 pm</p>
        <div className="hover">
          <h4>Requirements Gathering</h4>
          <p>03 pm - 04 pm</p>
          <span>Francisco Watt</span>
        </div>
      </td>
      <td className="active">
        <h4>Stakeholder Meeting</h4>
        <p>05 pm - 06 pm</p>
        <div className="hover">
          <h4>Stakeholder Meeting</h4>
          <p>05 pm - 06 pm</p>
          <span>Charles King</span>
        </div>
      </td>
      <td></td>
    </tr>
    <tr>
      <td className="day">Monday</td>
      <td className="active">
        <h4>Sprint Planning</h4>
        <p>10 am - 11 am</p>
        <div className="hover">
          <h4>Sprint Planning</h4>
          <p>10 am - 11 am</p>
          <span>Tabitha Potter</span>
        </div>
      </td>
      <td></td>
      <td className="active">
        <h4>Development</h4>
        <p>03 pm - 05 pm</p>
        <div className="hover">
          <h4>Development</h4>
          <p>03 pm - 05 pm</p>
          <span>Lester Gray</span>
        </div>
      </td>
      <td></td>
      <td className="active">
        <h4>Code Review</h4>
        <p>07 pm - 08 pm</p>
        <div className="hover">
          <h4>Code Review</h4>
          <p>07 pm - 08 pm</p>
          <span>Candi Yip</span>
        </div>
      </td>
    </tr>
    <tr>
      <td className="day">Tuesday</td>
      <td className="active">
        <h4>Client Demo</h4>
        <p>10 am - 11 am</p>
        <div className="hover">
          <h4>Client Demo</h4>
          <p>10 am - 11 am</p>
          <span>Mary Cass</span>
        </div>
      </td>
      <td></td>
      <td></td>
      <td className="active">
        <h4>Testing</h4>
        <p>05 pm - 06 pm</p>
        <div className="hover">
          <h4>Testing</h4>
          <p>05 pm - 06 pm</p>
          <span>Brenda Mastropietro</span>
        </div>
      </td>
      <td className="active">
        <h4>Bug Fixing</h4>
        <p>07 pm - 08 pm</p>
        <div className="hover">
          <h4>Bug Fixing</h4>
          <p>07 pm - 08 pm</p>
          <span>Marlene Bruce</span>
        </div>
      </td>
    </tr>
    <tr>
      <td className="day">Wednesday</td>
      <td className="active">
        <h4>Team Meeting</h4>
        <p>10 am - 12 pm</p>
        <div className="hover">
          <h4>Team Meeting</h4>
          <p>10 am - 12 pm</p>
          <span>Brenda Hester</span>
        </div>
      </td>
      <td></td>
      <td className="active">
        <h4>Design Review</h4>
        <p>03 pm - 05 pm</p>
        <div className="hover">
          <h4>Design Review</h4>
          <p>03 pm - 05 pm</p>
          <span>Brian Ashworth</span>
        </div>
      </td>
      <td></td>
      <td className="active">
        <h4>Documentation</h4>
        <p>07 pm - 08 pm</p>
        <div className="hover">
          <h4>Documentation</h4>
          <p>07 pm - 08 pm</p>
          <span>Mark Croteau</span>
        </div>
      </td>
    </tr>
    <tr>
      <td className="day">Thursday</td>
      <td></td>
      <td className="active">
        <h4>Client Review</h4>
        <p>11 am - 12 pm</p>
        <div className="hover">
          <h4>Client Review</h4>
          <p>1 am - 12 pm</p>
          <span>Elisabeth Schreck</span>
        </div>
      </td>
      <td></td>
      <td className="active">
        <h4>Deployment</h4>
        <p>05 pm - 06 pm</p>
        <div className="hover">
          <h4>Deployment</h4>
          <p>05 pm - 06 pm</p>
          <span>Edward Garcia</span>
        </div>
      </td>
      <td></td>
    </tr>
    <tr>
      <td className="day">Friday</td>
      <td className="active">
        <h4>Project Review</h4>
        <p>10 am - 11 am</p>
        <div className="hover">
          <h4>Project Review</h4>
          <p>10 am - 11 am</p>
          <span>Jackie Potts</span>
        </div>
      </td>
      <td></td>
      <td className="active">
        <h4>Quality Assurance</h4>
        <p>03 pm - 05 pm</p>
        <div className="hover">
          <h4>Quality Assurance</h4>
          <p>03 pm - 05 pm</p>
          <span>Travis Brown</span>
        </div>
      </td>
      <td></td>
      <td className="active">
        <h4>Feedback Session</h4>
        <p>07 pm - 08 pm</p>
        <div className="hover">
          <h4>Feedback Session</h4>
          <p>07 pm - 08 pm</p>
          <span>Benjamin Barnett</span>
        </div>
      </td>
    </tr>
    <tr>
      <td className="day">Saturday</td>
      <td></td>
      <td></td>
      <td className="active">
        <h4>User Training</h4>
        <p>03 pm - 04 pm</p>
        <div className="hover">
          <h4>User Training</h4>
          <p>03 pm - 04 pm</p>
          <span>Andre Walls</span>
        </div>
      </td>
      <td className="active">
        <h4>Project Closure</h4>
        <p>05 pm - 06 pm</p>
        <div className="hover">
          <h4>Project Closure</h4>
          <p>05 pm - 06 pm</p>
          <span>Margaret Thomas</span>
        </div>
      </td>
      <td></td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
</div>
</AdminLayout>
    );
}
export default Calender;