import React from 'react';
import AdminLayout from '../../../components/layouts/adminlayout';
import './team.css'

interface MyComponentProps {
    // Define other props here
    style?: React.CSSProperties; // Ensure that the style prop follows the CSSProperties type
  }
const Team:React.FC<MyComponentProps> = ({ style }) => {
return(
    <AdminLayout>
       
<div className="container">
    <div className="row">
        
        <div className="col-lg-9" style={{width:'100%'}}>
            <div className="d-flex flex-column flex-md-row mb-3 mb-md-0">
              
                <div role="toolbar" className="btn-toolbar">
                    <div role="group" className="mr-auto mr-md-2 btn-group"><a className="align-self-center btn btn-secondary active" aria-current="page" id="tooltipShowList" href="#"><i className="fa-fw fa fa-bars"></i></a><a className="align-self-center btn btn-secondary" id="tooltipShowGrid" href="#"><i className="fa-fw fa fa-th-large"></i></a></div>
                    <div role="group" className="btn-group">
                        <button id="tooltipAddNew" className="align-self-center btn btn-primary"><i className="fa-fw fa fa-plus"></i></button>
                    </div>
                </div>
            </div>
            <div className="mb-3 Card_custom-card--border_5wJKy card">
                <div className="table-responsive-xl">
                    <table className="mb-0 table table-hover">
                        <thead>
                            <tr>
                                <th className="align-middle bt-0">Star</th>
                                <th className="align-middle bt-0">Project</th>
                                <th className="align-middle bt-0">Status</th>
                                <th className="align-middle bt-0">Tasks Completed</th>
                                <th className="align-middle bt-0">People</th>
                                <th className="align-middle bt-0 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="#">Ergonomic real-time adapter</a></div><span>Last Edited by: Savanah Durgan <br></br>Sunday, 12 June, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-success badge-pill">Active</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height:'5px'}}>
                                    <div
    className="progress-bar"
    role="progressbar"
    aria-valuenow={25}
    aria-valuemin={0}
    aria-valuemax={100}
    style={{ width: '25%' }}
  ></div>
                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar1.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabIndex={-1} className="dropdown-divider"></div>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="#">Stand-alone clear-thinking initiative</a></div><span>Last Edited by: Brando Gutkowski <br></br>Friday, 12 December, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-danger badge-pill">Suspended</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                    <div
    className="progress-bar"
    role="progressbar"
    aria-valuenow={25}
    aria-valuemin={0}
    aria-valuemax={100}
    style={{ width: '25%' }}
  ></div>                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar2.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabIndex={-1} className="dropdown-divider"></div>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="#">Configurable homogeneous knowledge user</a></div><span>Last Edited by: Wilmer Gorczany <br></br>Tuesday, 12 June, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-warning badge-pill">Waiting</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                    <div
    className="progress-bar"
    role="progressbar"
    aria-valuenow={25}
    aria-valuemin={0}
    aria-valuemax={100}
    style={{ width: '25%' }}
  ></div>                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar3.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabIndex={-1} className="dropdown-divider"></div>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="#">Progressive 3rd generation superstructure</a></div><span>Last Edited by: Eden Green <br></br>Sunday, 12 September, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-secondary badge-pill">Paused</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                    <div
    className="progress-bar"
    role="progressbar"
    aria-valuenow={25}
    aria-valuemin={0}
    aria-valuemax={100}
    style={{ width: '25%' }}
  ></div>                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar4.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabIndex={-1} className="dropdown-divider"></div>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="#">Virtual intermediate portal</a></div><span>Last Edited by: Gregoria Hagenes <br></br>Friday, 12 October, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-success badge-pill">Active</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                    <div
    className="progress-bar"
    role="progressbar"
    aria-valuenow={25}
    aria-valuemin={0}
    aria-valuemax={100}
    style={{ width: '25%' }}
  ></div>                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar5.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabIndex={-1} className="dropdown-divider"></div>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="#">Visionary client-server hardware</a></div><span>Last Edited by: Haskell Mills <br></br>Monday, 12 July, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-danger badge-pill">Suspended</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                    <div
    className="progress-bar"
    role="progressbar"
    aria-valuenow={25}
    aria-valuemin={0}
    aria-valuemax={100}
    style={{ width: '25%' }}
  ></div>                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar6.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabIndex={-1} className="dropdown-divider"></div>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="#">Focused context-sensitive hardware</a></div><span>Last Edited by: Rey Hansen <br></br>Friday, 12 May, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-warning badge-pill">Waiting</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                    <div
    className="progress-bar"
    role="progressbar"
    aria-valuenow={25}
    aria-valuemin={0}
    aria-valuemax={100}
    style={{ width: '25%' }}
  ></div>                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar7.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabIndex={-1} className="dropdown-divider"></div>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="#">Advanced mission-critical groupware</a></div><span>Last Edited by: Carey Runolfsson <br></br>Friday, 12 May, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-secondary badge-pill">Paused</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                    <div
    className="progress-bar"
    role="progressbar"
    aria-valuenow={25}
    aria-valuemin={0}
    aria-valuemax={100}
    style={{ width: '25%' }}
  ></div>                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar1.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabIndex={-1} className="dropdown-divider"></div>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="#">De-engineered tertiary matrix</a></div><span>Last Edited by: Jacynthe Beier <br></br>Wednesday, 12 May, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-success badge-pill">Active</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                    <div
    className="progress-bar"
    role="progressbar"
    aria-valuenow={25}
    aria-valuemin={0}
    aria-valuemax={100}
    style={{ width: '25%' }}
  ></div>                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar2.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabIndex={-1} className="dropdown-divider"></div>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="#">Progressive 4th generation emulation</a></div><span>Last Edited by: Baby Robel <br></br>Thursday, 12 March, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-danger badge-pill">Suspended</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                    <div
    className="progress-bar"
    role="progressbar"
    aria-valuenow={25}
    aria-valuemin={0}
    aria-valuemax={100}
    style={{ width: '25%' }}
  ></div>                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar3.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabIndex={-1} className="dropdown-divider"></div>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="#">Sharable even-keeled access</a></div><span>Last Edited by: Ethan Little <br></br>Saturday, 12 March, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-warning badge-pill">Waiting</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                    <div
    className="progress-bar"
    role="progressbar"
    aria-valuenow={25}
    aria-valuemin={0}
    aria-valuemax={100}
    style={{ width: '25%' }}
  ></div>                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar4.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabIndex={-1} className="dropdown-divider"></div>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="#">Optimized responsive attitude</a></div><span>Last Edited by: Kolby Batz <br></br>Saturday, 12 February, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-secondary badge-pill">Paused</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                    <div
    className="progress-bar"
    role="progressbar"
    aria-valuenow={25}
    aria-valuemin={0}
    aria-valuemax={100}
    style={{ width: '25%' }}
  ></div>                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar5.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabIndex={-1} className="dropdown-divider"></div>
                                            <button type="button" tabIndex={0} className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-center pb-0 card-footer">
                    <nav className="" aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a href="#" className="page-link" aria-label="Previous"><span aria-hidden="true"><i className="fa fa-fw fa-angle-left"></i></span><span className="sr-only">Previous</span></a></li>
                            <li className="page-item active"><a href="#" className="page-link">1</a></li>
                            <li className="page-item"><a href="#" className="page-link">2</a></li>
                            <li className="page-item"><a href="#" className="page-link">3</a></li>
                            <li className="page-item"><a href="#" className="page-link" aria-label="Next"><span aria-hidden="true"><i className="fa fa-fw fa-angle-right"></i></span><span className="sr-only">Next</span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
    </AdminLayout>
);
}
export default Team;