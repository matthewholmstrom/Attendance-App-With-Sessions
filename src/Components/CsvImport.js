import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";




const currentDate = new Date().toLocaleDateString("en-US", {

    month: "short",
    weekday: "short",
    day: "numeric"
    

})

export default function CsvImport(){



    return(

        <div className="csv-import-main">


            <Sidebar/>


            <div className="csv-import-right">



                         <div className="dashboard-right-header">


                                <div className="breadcrumb">
                                    Workspace <span>/</span>
                                                 CSV imports</div>


                                    
                                <div className="dashboard-right-header-right">

                                    <span>{currentDate}</span>

                                    <div>A</div>

                                    </div>
                </div>



                <div className="dashboard-right-content">




  <div className="dashboard-right-content-top">

                 <div className="dashboard-right-content-left">
            <p className="eyebrow">DATA MANAGEMENT</p>
            <h1>CSV imports</h1>
            <p className="page-description">Import attendance records and keep a history of the original files.
</p>
          </div>



          <div className="dashboard-right-content-top-right">

                        <button className="dashboard-right-content-top-button2">Import CSV</button>

          </div>

                </div>




                                <div className="csv-import-right-bottom">



                                                                <div className="csv-import-right-bottom-card1-inner-outer">


                                                                <div className="csv-import-right-bottom-card1-inner">


                                                                    <div className="csv-import-right-bottom-card1-top-space">
                                                                    

                                                                    <div className="panel-heading csv-import">


                                                            <div className="csv-import-card1-left-space">
                                                            <h2>Import history</h2>
                                                            <p>Original CSV files and details of previous imports.</p>

                                                            </div>


                                                            <span className="subtle-tag">0 imports</span>
                                                           </div>



                                                           <div className="dashboard-right-content-bottom-first-select">
    <label>Date range</label>
    <select>
        <option value="7">Last 7 days</option><option value="14">Last 14 days</option>
        <option value="30">Last 30 days</option><option value="90">Last 90 days</option>
        <option value="year">This year</option><option value="lastyear">Last year</option>
        <option value="all">All dates</option><option value="custom">Custom</option>
    </select>
</div>


</div>
        





                                                                    </div>

                                                                            <div className="csv-import-right-bottom-card1-bottom">



           <table className="dashboard-right-content-table">
      <thead>

        <tr>
          <th>File</th>
          <th>Imported</th>
          <th>Rows imported</th>
          <th>Skipped Mode</th>

       <th>Original file</th>
        </tr>

      </thead>


      <tbody>


      </tbody>
    </table>

            </div>
                                                                    </div>


<div className="csv-import-right-bottom-card2">


      <div className="panel-heading csv-import" id="panel-heading-csv-import">

                                                            <div className="csv-import-card1-left-space">
                                                          <section className="panel data-settings">
          <div><h2 id="panel-heading-csv-import-h2">Attendance data</h2><p>0 attendance rows currently stored in this browser.</p><small>Import history and attendance records are stored separately.</small></div>
        </section>

                                                            </div>


                                                        <button className="button button-danger-outline">Clear attendance data</button>

                                                           </div>






</div>


                                    </div>




                    </div>






            </div>
        </div>
    )




}