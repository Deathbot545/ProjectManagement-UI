import React, { useEffect, useRef } from 'react';
import AdminLayout from '../../../components/layouts/adminlayout';
import $ from 'jquery';
import 'datatables.net';
import './task.css';


const Task: React.FC = () => {
    const tableRef = useRef<HTMLTableElement>(null);

    useEffect(() => {
        if ($.fn.DataTable()) {
            $(tableRef.current!).DataTable();
        }
    }, []);
    

    return (
        <AdminLayout>
        <div className="row">
   <div className="col-md-12 ">
      <div className="card gradient-custom2">
         <div className="card-header rounded gradient-custom">
            <h4 className="card-title"> Simple Table</h4>
         </div>
         <div className="card-body">
         <div className="table-responsive ps rounded" style={{ background: 'linear-gradient(to right, #F3E6E7, #FFFFE0, #ffdbe0, #FFFFFF)' }}>
               <table className="table tablesorter table-light-theme td " id="">
                  <thead className=" text-primary table-light-theme td">
                     <tr>
                        <th>
                           Name
                        </th>
                        <th>
                           Country
                        </th>
                        <th>
                           City
                        </th>
                        <th className="text-center">
                           Salary
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>
                           Dakota Rice
                        </td>
                        <td>
                           Niger
                        </td>
                        <td>
                           Oud-Turnhout
                        </td>
                        <td className="text-center">
                           $36,738
                        </td>
                     </tr>
                     <tr>
                        <td>
                           Minerva Hooper
                        </td>
                        <td>
                           Curaçao
                        </td>
                        <td>
                           Sinaai-Waas
                        </td>
                        <td className="text-center">
                           $23,789
                        </td>
                     </tr>
                     <tr>
                        <td>
                           Sage Rodriguez
                        </td>
                        <td>
                           Netherlands
                        </td>
                        <td>
                           Baileux
                        </td>
                        <td className="text-center">
                           $56,142
                        </td>
                     </tr>
                     <tr>
                        <td>
                           Philip Chaney
                        </td>
                        <td>
                           Korea, South
                        </td>
                        <td>
                           Overland Park
                        </td>
                        <td className="text-center">
                           $38,735
                        </td>
                     </tr>
                     <tr>
                        <td>
                           Doris Greene
                        </td>
                        <td>
                           Malawi
                        </td>
                        <td>
                           Feldkirchen in Kärnten
                        </td>
                        <td className="text-center">
                           $63,542
                        </td>
                     </tr>
                     <tr>
                        <td>
                           Mason Porter
                        </td>
                        <td>
                           Chile
                        </td>
                        <td>
                           Gloucester
                        </td>
                        <td className="text-center">
                           $78,615
                        </td>
                     </tr>
                     <tr>
                        <td>
                           Jon Porter
                        </td>
                        <td>
                           Portugal
                        </td>
                        <td>
                           Gloucester
                        </td>
                        <td className="text-center">
                           $98,615
                        </td>
                     </tr>
                  </tbody>
               </table>
               <div className="ps__rail-x" style={{left: '0px', bottom: '0px'}}><div className="ps__thumb-x" tabIndex={0} style={{left: '0px', bottom: '0px'}}>
            </div>
         </div>
         <div className="ps__rail-y" style={{left: '0px', bottom: '0px'}}><div className="ps__thumb-y" tabIndex={0} style={{left: '0px', bottom: '0px'}}>
      </div>
   </div>
</div>
</div>
</div>
</div>
<div>
    
    <div style={{ marginBottom: '20px' }} />

</div>

<div className="col-md-12">
   <div className="card  gradient-custom3">
      <div className="card-header rounded gradient-custom4">
         <h4 className="card-title"> Table on Plain Background</h4>
         <p className="category"> Here is a subtitle for this table</p>
      </div>
      <div className="card-body rounded-md">
      <div className="table-responsive ps rounded" style={{ background: 'linear-gradient(to right, #F3E6E7, #FFFFE0, #ffdbe0, #FFFFFF)' }}>
            <table className="table tablesorter table-light-theme2 td " id="">
               <thead className=" text-primary">
                  <tr>
                     <th>
                        Name
                     </th>
                     <th>
                        Country
                     </th>
                     <th>
                        City
                     </th>
                     <th className="text-center">
                        Salary
                     </th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>
                        Dakota Rice
                     </td>
                     <td>
                        Niger
                     </td>
                     <td>
                        Oud-Turnhout
                     </td>
                     <td className="text-center">
                        $36,738
                     </td>
                  </tr>
                  <tr>
                     <td>
                        Minerva Hooper
                     </td>
                     <td>
                        Curaçao
                     </td>
                     <td>
                        Sinaai-Waas
                     </td>
                     <td className="text-center">
                        $23,789
                     </td>
                  </tr>
                  <tr>
                     <td>
                        Sage Rodriguez
                     </td>
                     <td>
                        Netherlands
                     </td>
                     <td>
                        Baileux
                     </td>
                     <td className="text-center">
                        $56,142
                     </td>
                  </tr>
                  <tr>
                     <td>
                        Philip Chaney
                     </td>
                     <td>
                        Korea, South
                     </td>
                     <td>
                        Overland Park
                     </td>
                     <td className="text-center">
                        $38,735
                     </td>
                  </tr>
                  <tr>
                     <td>
                        Doris Greene
                     </td>
                     <td>
                        Malawi
                     </td>
                     <td>
                        Feldkirchen in Kärnten
                     </td>
                     <td className="text-center">
                        $63,542
                     </td>
                  </tr>
                  <tr>
                     <td>
                        Mason Porter
                     </td>
                     <td>
                        Chile
                     </td>
                     <td>
                        Gloucester
                     </td>
                     <td className="text-center">
                        $78,615
                     </td>
                  </tr>
                  <tr>
                     <td>
                        Jon Porter
                     </td>
                     <td>
                        Portugal
                     </td>
                     <td>
                        Gloucester
                     </td>
                     <td className="text-center">
                        $98,615
                     </td>
                  </tr>
               </tbody>
            </table>
            <div className="ps__rail-x" style={{left: '0px', bottom: '0px'}}><div className="ps__thumb-x" tabIndex={0} style={{left: '0px', bottom: '0px'}}>
         </div>
      </div>
      <div className="ps__rail-y" style={{left: '0px', bottom: '0px'}}><div className="ps__thumb-y" tabIndex={0} style={{left: '0px', bottom: '0px'}}>
   </div>
</div>
</div>
</div>
</div>
</div>
</div>
    
        </AdminLayout>
    );
}
export default Task