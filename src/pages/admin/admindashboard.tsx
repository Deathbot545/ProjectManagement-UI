import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/layouts/adminlayout'; // Import your layout component
import Chart, { ChartConfiguration, ChartTypeRegistry } from "chart.js/auto";

const Dashboard: React.FC = () => {
    const [myChart, setMyChart] = useState<Chart>();
    const [pieChart, setPieChart] = useState<Chart<"pie">>(); // Specify the type for pieChart

    useEffect(() => {
        const barCtx = document.getElementById("chart-bar") as HTMLCanvasElement;
        const pieCtx = document.getElementById("chart-pie") as HTMLCanvasElement;

        let newChart: Chart | undefined;
        let newPieChart: Chart<"pie"> | undefined; // Specify the type for newPieChart

        if (barCtx && pieCtx) {
            // Destroy existing charts if they exist
            if (myChart) {
                myChart.destroy();
            }
            if (pieChart) {
                pieChart.destroy();
            }

            newChart = new Chart(barCtx, {
                type: 'bar',
                data: {
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                    datasets: [{
                        label: "Traffic",
                        data: [3234, 2234, 3234, 1234],
                        backgroundColor: ["rgba(66,133,244,0.6)", "rgba(66,133,244,0.6)",
                            "rgba(66,133,244,0.6)", "rgba(66,133,244,0.6)"
                        ],
                    }],
                },
                options: {} // Add any additional options here
            });

            newPieChart = new Chart(pieCtx, {
                type: "pie",
                data: {
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                    datasets: [{
                        data: [1234, 2234, 3234, 4234],
                        backgroundColor: ["rgba(117,169,255,0.6)", "rgba(148,223,215,0.6)",
                            "rgba(208,129,222,0.6)", "rgba(247,127,167,0.6)"
                        ],
                    }],
                },
                options: {
                    // Add options specific to the pie chart here
                }
            });

            setMyChart(newChart);
            setPieChart(newPieChart);
        }

        // Clean up function to destroy the charts on component unmount
        return () => {
            if (newChart) {
                newChart.destroy();
            }
            if (newPieChart) {
                newPieChart.destroy();
            }
        };
    }, []);
    return (
        <AdminLayout> {/* Wrap the content with the Layout component */}
            <h1>Dashboard</h1>
            <div className="row chart-container" >
    <div className="col-md-6">
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title">Chart</h5>
                <div className="chart-canvas">
                    <canvas id="chart-bar" className="chart-canvas"></canvas>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-6">
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title">Empty Card</h5>
                <div className="chart-canvas">
                    <canvas id="chart-pie" className="chart-canvas pie-chart-small"></canvas>
                </div>
                {/* Empty card content */}
            </div>
        </div>
    </div>
</div>



    
            {/* Small card related to project management software */}
            <div className="row mt-3">
                <div className="col-md-4">
                   
                    <div className="card">
                        <h5 className="card-header">Project Management</h5>
                        <div className="card-body">
                            <h5 className="card-title">Project Overview</h5>
                            <p className="card-text">Track progress, manage tasks, and collaborate efficiently.</p>
                            <a href="#" className="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <h5 className="card-header">Project Management</h5>
                        <div className="card-body">
                            <h5 className="card-title">Project Overview</h5>
                            <p className="card-text">Track progress, manage tasks, and collaborate efficiently.</p>
                            <a href="#" className="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card">
                        <h5 className="card-header">Project Management</h5>
                        <div className="card-body">
                            <h5 className="card-title">Project Overview</h5>
                            <p className="card-text">Track progress, manage tasks, and collaborate efficiently.</p>
                            <a href="#" className="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>

                

            </div>
    
            <div className="p-3 mb-4 bg-body-tertiary rounded-3"> 
                <div className="table-responsive">
                    <table className="table align-middle">
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
