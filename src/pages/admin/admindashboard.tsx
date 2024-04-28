import React, { useEffect, useRef} from 'react';
import AdminLayout from '../../components/layouts/adminlayout'; // Import your layout component
import Chart, { ChartTypeRegistry } from "chart.js/auto";
const Dashboard: React.FC = () => {
   const chartBarRef = useRef<HTMLCanvasElement>(null);
   const chartPieRef = useRef<HTMLCanvasElement>(null);
 
   useEffect(() => {
      const initializeChart = (canvasRef: React.RefObject<HTMLCanvasElement>, type: keyof ChartTypeRegistry) => {
        if (canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          if (ctx) {
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, '#4169E1');
            gradient.addColorStop(0.5, '#DA70D6');
            gradient.addColorStop(1, '#FFD700');
  
            new Chart(ctx, {
              type: type,
              data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                  label: 'Sales',
                  data: [65, 59, 80, 81, 56, 55],
                  backgroundColor: gradient,
                  borderColor: 'rgba(255, 255, 255, 1)',
                  borderWidth: 1
                }]
              },
              options: {
                scales: {
                  y: { beginAtZero: true }
                },
                plugins: { legend: { display: false } }
              }
            });
          }
        }
      };
  
      initializeChart(chartBarRef, 'bar');
      initializeChart(chartPieRef, 'pie');
  
      // Clean up chart instances on unmount
      return () => {
        if (chartBarRef.current) {
          const chartBarInstance = Chart.getChart(chartBarRef.current);
          if (chartBarInstance) chartBarInstance.destroy();
        }
        if (chartPieRef.current) {
          const chartPieInstance = Chart.getChart(chartPieRef.current);
          if (chartPieInstance) chartPieInstance.destroy();
        }
      };
    }, []);
  

   
    return (
        <AdminLayout> {/* Wrap the content with the Layout component */}
           <h1 className="welcome-text">Welcome back, Alex</h1>

           <div className="row g-4 mb-4">
           <div className="col-sm-6 col-xl-3">
    <div className="card purple-gradient-bg" style={{ width: '18rem', borderRadius: '1rem', height: '15rem' }}>
        <div className=" d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0 purple-text">Card title</h5>
            <div className="btn-group">
                <button type="button" className="btn btn-danger dropdown-toggle purple-btn" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
            </div>
        </div>
        <div className="card-body">
            <h6 className="card-subtitle mb-2 purple-text">Card subtitle</h6>
            <p className="card-text purple-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
</div>
<div className="col-sm-6 col-xl-3">
    <div className="card orange-pink-gradient-bg" style={{ width: '18rem', borderRadius: '1rem', height: '15rem' }}>
        <div className=" d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0 purple-text">Card title</h5>
            <div className="btn-group">
                <button type="button" className="btn btn-danger dropdown-toggle purple-btn" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
            </div>
        </div>
        <div className="card-body">
            <h6 className="card-subtitle mb-2 purple-text">Card subtitle</h6>
            <p className="card-text purple-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
</div>

<div className="col-sm-6 col-xl-3">
    <div className="card deepblue-skyblue-lightgreen-gradient-bg" style={{ width: '18rem', borderRadius: '1rem', height: '15rem' }}>
        <div className=" d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0 purple-text">Card title</h5>
            <div className="btn-group">
                <button type="button" className="btn btn-danger dropdown-toggle purple-btn" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
            </div>
        </div>
        <div className="card-body">
            <h6 className="card-subtitle mb-2 purple-text">Card subtitle</h6>
            <p className="card-text purple-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
</div>

<div className="col-sm-6 col-xl-3">
    <div className="card royalblue-orchid-gold-gradient-bg" style={{ width: '18rem', borderRadius: '1rem', height: '15rem' }}>
        <div className=" d-flex justify-content-between align-items-center">
            <h5 className="card-title ">Card title</h5>
            <div className="btn-group">
                <button type="button" className="btn btn-danger dropdown-toggle purple-btn" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
            </div>
        </div>
        <div className="card-body">
            <h6 className="card-subtitle mb-2 purple-text">Card subtitle</h6>
            <p className="card-text purple-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
</div>



</div>

<div className="row chart-container">
  <div className="col-md-8">
    <div className="card h-100 rounded-3 gradient-custom"> {/* Apply the new background class */}
      <div className="card-body">
        <h5 className="card-title">Chart</h5>
        <div className="chart-canvas ">
          <canvas ref={chartBarRef} id="chart-bar" className="chart-canvas"></canvas>
        </div>
      </div>
    </div>
  </div>

  <div className="col-md-4"> {/* Added a new column */}
    <div className="card h-100 rounded-3 gradient-custom" style={{ padding: '10px', margin: '0' }}> {/* Adjust padding and margin */}
      <div className="card-body" style={{ padding: '10px' }}> {/* Adjust padding */}
        <h5 className="card-title custom-text" style={{ margin: '0' }}>Empty Card</h5> {/* Adjust margin */}
        <div className="list-group custom-list-group"> {/* Apply custom styles to list group */}
          <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
            <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"/>
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0 custom-text" style={{ margin: '0' }}>List group item heading</h6> {/* Adjust margin */}
                <p className="mb-0 opacity-75 custom-text" style={{ margin: '0' }}>Some placeholder content in a paragraph.</p> {/* Adjust margin */}
              </div>
              <small className="opacity-50 text-nowrap">now</small>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
            <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"/>
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0 custom-text" style={{ margin: '0' }}>Another title here</h6> {/* Adjust margin */}
                <p className="mb-0 opacity-75 custom-text" style={{ margin: '0' }}>Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p> {/* Adjust margin */}
              </div>
              <small className="opacity-50 text-nowrap">3d</small>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
            <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"/>
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0 custom-text" style={{ margin: '0' }}>Third heading</h6> {/* Adjust margin */}
                <p className="mb-0 opacity-75 custom-text" style={{ margin: '0' }}>Some placeholder content in a paragraph.</p> {/* Adjust margin */}
              </div>
              <small className="opacity-50 text-nowrap">1w</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


{/* Small card related to project management software */}
<div className="container">
<div className="row mt-3 align-items-start"> {/* Align items at the start of the flex container */}
  <div className="col-md-4 mb-3"> {/* Add margin-bottom to create space */}
    <div className="card purple-gradient-bg">
      <h5 className="card-header">Project Management</h5>
      <div className="card-body">
        <h5 className="card-title">Project Overview</h5>
        <p className="card-text">Track progress, manage tasks, and collaborate efficiently.</p>
        <a href="#" className="btn btn-primary">View Details</a>
      </div>
    </div>
  </div>
  <div className="col-md-4 mb-3"> {/* Add margin-bottom to create space */}
    <div className="card orange-pink-gradient-bg">
      <h5 className="card-header">Project Management</h5>
      <div className="card-body">
        <h5 className="card-title">Project Overview</h5>
        <p className="card-text">Track progress, manage tasks, and collaborate efficiently.</p>
        <a href="#" className="btn btn-primary">View Details</a>
      </div>
    </div>
  </div>
  <div className="col-md-4 mb-3"> {/* Add margin-bottom to create space */}
    <div className="card royalblue-orchid-gold-gradient-bg">
      <h5 className="card-header">Project Management</h5>
      <div className="card-body">
        <h5 className="card-title">Project Overview</h5>
        <p className="card-text">Track progress, manage tasks, and collaborate efficiently.</p>
        <a href="#" className="btn btn-primary">View Details</a>
      </div>
    </div>
  </div>
</div>

</div>
<div className="p-3 mb-4 bg-body-tertiary rounded-3 deepblue-skyblue-lightgreen-gradient-bg">
  <div className="table-responsive">
    <table className="table align-middle custom-table custom-table-content">
         <thead>
            <tr>
               <th scope="col">#</th>
               <th scope="col">First</th>
               <th scope="col">Last</th>
               <th scope="col">Handle</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <th scope="row">1</th>
               <td>Mark</td>
               <td>Otto</td>
               <td>@mdo</td>
            </tr>
            <tr>
               <th scope="row">2</th>
               <td>Jacob</td>
               <td>Thornton</td>
               <td>@fat</td>
            </tr>
            <tr>
               <th scope="row">3</th>
               <td>@twitter</td>
            </tr>
            <tr className="align-bottom">
               ...
            </tr>
            <tr>
               <td>...</td>
               <td>...</td>
               <td className="align-top">This cell is aligned to the top.</td>
               <td>...</td>
            </tr>
         </tbody>
      </table>
   </div>
</div>



        </AdminLayout>
    );
    
}


export default Dashboard;
