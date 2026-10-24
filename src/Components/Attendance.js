import React from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";


const attendanceRecords = [
  { username: "jwilson", realName: "James Wilson", date: "2026-09-18", loginTime: "09:00 AM", logoutTime: "10:30 AM", sessionId: "S001" },
  { username: "jwilson", realName: "James Wilson", date: "2026-09-18", loginTime: "11:00 AM", logoutTime: "12:15 PM", sessionId: "S002" },
  { username: "jwilson", realName: "James Wilson", date: "2026-09-21", loginTime: "09:15 AM", logoutTime: "11:00 AM", sessionId: "S003" },
  { username: "jwilson", realName: "James Wilson", date: "2026-09-25", loginTime: "10:00 AM", logoutTime: "12:00 PM", sessionId: "S004" },
  { username: "jwilson", realName: "James Wilson", date: "2026-10-02", loginTime: "09:00 AM", logoutTime: "10:45 AM", sessionId: "S005" },
  { username: "jwilson", realName: "James Wilson", date: "2026-10-05", loginTime: "09:30 AM", logoutTime: "11:30 AM", sessionId: "S006" },
  { username: "jwilson", realName: "James Wilson", date: "2026-10-05", loginTime: "12:15 PM", logoutTime: "01:00 PM", sessionId: "S007" },
  { username: "jwilson", realName: "James Wilson", date: "2026-10-09", loginTime: "10:00 AM", logoutTime: "12:00 PM", sessionId: "S008" },
  { username: "jwilson", realName: "James Wilson", date: "2026-10-12", loginTime: "09:00 AM", logoutTime: "10:30 AM", sessionId: "S009" },
  { username: "jwilson", realName: "James Wilson", date: "2026-10-12", loginTime: "11:15 AM", logoutTime: "12:00 PM", sessionId: "S010" },
  { username: "jwilson", realName: "James Wilson", date: "2026-10-17", loginTime: "09:00 AM", logoutTime: "11:00 AM", sessionId: "S011" },

  { username: "slee", realName: "Sarah Lee", date: "2026-09-19", loginTime: "09:30 AM", logoutTime: "11:00 AM", sessionId: "S012" },
  { username: "slee", realName: "Sarah Lee", date: "2026-09-23", loginTime: "10:00 AM", logoutTime: "12:00 PM", sessionId: "S013" },
  { username: "slee", realName: "Sarah Lee", date: "2026-09-28", loginTime: "01:00 PM", logoutTime: "03:00 PM", sessionId: "S014" },
  { username: "slee", realName: "Sarah Lee", date: "2026-10-01", loginTime: "09:00 AM", logoutTime: "10:30 AM", sessionId: "S015" },
  { username: "slee", realName: "Sarah Lee", date: "2026-10-05", loginTime: "01:00 PM", logoutTime: "02:30 PM", sessionId: "S016" },
  { username: "slee", realName: "Sarah Lee", date: "2026-10-08", loginTime: "09:30 AM", logoutTime: "11:30 AM", sessionId: "S017" },
  { username: "slee", realName: "Sarah Lee", date: "2026-10-12", loginTime: "09:30 AM", logoutTime: "11:00 AM", sessionId: "S018" },
  { username: "slee", realName: "Sarah Lee", date: "2026-10-15", loginTime: "01:00 PM", logoutTime: "03:00 PM", sessionId: "S019" },
  { username: "slee", realName: "Sarah Lee", date: "2026-10-17", loginTime: "10:00 AM", logoutTime: "12:00 PM", sessionId: "S020" },

  { username: "mgarcia", realName: "Maria Garcia", date: "2026-09-20", loginTime: "", logoutTime: "", sessionId: "" },
  { username: "mgarcia", realName: "Maria Garcia", date: "2026-09-24", loginTime: "", logoutTime: "", sessionId: "" },
  { username: "mgarcia", realName: "Maria Garcia", date: "2026-09-29", loginTime: "", logoutTime: "", sessionId: "" },
  { username: "mgarcia", realName: "Maria Garcia", date: "2026-10-03", loginTime: "", logoutTime: "", sessionId: "" },
  { username: "mgarcia", realName: "Maria Garcia", date: "2026-10-07", loginTime: "", logoutTime: "", sessionId: "" },
  { username: "mgarcia", realName: "Maria Garcia", date: "2026-10-11", loginTime: "", logoutTime: "", sessionId: "" },
  { username: "mgarcia", realName: "Maria Garcia", date: "2026-10-16", loginTime: "", logoutTime: "", sessionId: "" },
  { username: "mgarcia", realName: "Maria Garcia", date: "2026-10-17", loginTime: "", logoutTime: "", sessionId: "" },

  { username: "dchen", realName: "David Chen", date: "2026-09-18", loginTime: "10:00 AM", logoutTime: "11:45 AM", sessionId: "S021" },
  { username: "dchen", realName: "David Chen", date: "2026-09-22", loginTime: "09:00 AM", logoutTime: "10:00 AM", sessionId: "S022" },
  { username: "dchen", realName: "David Chen", date: "2026-09-22", loginTime: "10:30 AM", logoutTime: "12:00 PM", sessionId: "S023" },
  { username: "dchen", realName: "David Chen", date: "2026-09-30", loginTime: "01:00 PM", logoutTime: "03:00 PM", sessionId: "S024" },
  { username: "dchen", realName: "David Chen", date: "2026-10-04", loginTime: "09:30 AM", logoutTime: "11:00 AM", sessionId: "S025" },
  { username: "dchen", realName: "David Chen", date: "2026-10-08", loginTime: "10:00 AM", logoutTime: "12:00 PM", sessionId: "S026" },
  { username: "dchen", realName: "David Chen", date: "2026-10-14", loginTime: "10:00 AM", logoutTime: "11:45 AM", sessionId: "S027" },
  { username: "dchen", realName: "David Chen", date: "2026-10-14", loginTime: "12:30 PM", logoutTime: "02:00 PM", sessionId: "S028" },
  { username: "dchen", realName: "David Chen", date: "2026-10-17", loginTime: "09:00 AM", logoutTime: "10:00 AM", sessionId: "S029" },
  { username: "dchen", realName: "David Chen", date: "2026-10-17", loginTime: "10:30 AM", logoutTime: "12:30 PM", sessionId: "S030" },

  { username: "apatel", realName: "Anita Patel", date: "2026-09-19", loginTime: "09:00 AM", logoutTime: "10:30 AM", sessionId: "S031" },
  { username: "apatel", realName: "Anita Patel", date: "2026-09-25", loginTime: "11:00 AM", logoutTime: "12:30 PM", sessionId: "S032" },
  { username: "apatel", realName: "Anita Patel", date: "2026-10-02", loginTime: "09:30 AM", logoutTime: "11:00 AM", sessionId: "S033" },
  { username: "apatel", realName: "Anita Patel", date: "2026-10-06", loginTime: "01:00 PM", logoutTime: "03:00 PM", sessionId: "S034" },
  { username: "apatel", realName: "Anita Patel", date: "2026-10-10", loginTime: "10:00 AM", logoutTime: "12:00 PM", sessionId: "S035" },
  { username: "apatel", realName: "Anita Patel", date: "2026-10-15", loginTime: "09:00 AM", logoutTime: "10:00 AM", sessionId: "S036" },
  { username: "apatel", realName: "Anita Patel", date: "2026-10-17", loginTime: "11:00 AM", logoutTime: "01:00 PM", sessionId: "S037" },

  { username: "rthomas", realName: "Robert Thomas", date: "2026-09-20", loginTime: "10:00 AM", logoutTime: "11:30 AM", sessionId: "S038" },
  { username: "rthomas", realName: "Robert Thomas", date: "2026-09-27", loginTime: "09:30 AM", logoutTime: "11:00 AM", sessionId: "S039" },
  { username: "rthomas", realName: "Robert Thomas", date: "2026-10-01", loginTime: "10:00 AM", logoutTime: "12:00 PM", sessionId: "S040" },
  { username: "rthomas", realName: "Robert Thomas", date: "2026-10-07", loginTime: "09:00 AM", logoutTime: "10:30 AM", sessionId: "S041" },
  { username: "rthomas", realName: "Robert Thomas", date: "2026-10-12", loginTime: "01:00 PM", logoutTime: "03:00 PM", sessionId: "S042" },
  { username: "rthomas", realName: "Robert Thomas", date: "2026-10-16", loginTime: "09:30 AM", logoutTime: "11:30 AM", sessionId: "S043" },

  { username: "kwilliams", realName: "Kevin Williams", date: "2026-09-21", loginTime: "09:00 AM", logoutTime: "10:00 AM", sessionId: "S044" },
  { username: "kwilliams", realName: "Kevin Williams", date: "2026-09-26", loginTime: "10:00 AM", logoutTime: "12:00 PM", sessionId: "S045" },
  { username: "kwilliams", realName: "Kevin Williams", date: "2026-10-03", loginTime: "09:30 AM", logoutTime: "11:30 AM", sessionId: "S046" },
  { username: "kwilliams", realName: "Kevin Williams", date: "2026-10-09", loginTime: "01:00 PM", logoutTime: "02:30 PM", sessionId: "S047" },
  { username: "kwilliams", realName: "Kevin Williams", date: "2026-10-13", loginTime: "09:00 AM", logoutTime: "11:00 AM", sessionId: "S048" },
  { username: "kwilliams", realName: "Kevin Williams", date: "2026-10-17", loginTime: "10:30 AM", logoutTime: "12:00 PM", sessionId: "S049" },

  { username: "emartin", realName: "Emily Martin", date: "2026-09-18", loginTime: "01:00 PM", logoutTime: "03:00 PM", sessionId: "S050" },
  { username: "emartin", realName: "Emily Martin", date: "2026-09-24", loginTime: "09:30 AM", logoutTime: "11:00 AM", sessionId: "S051" },
  { username: "emartin", realName: "Emily Martin", date: "2026-10-02", loginTime: "10:00 AM", logoutTime: "12:00 PM", sessionId: "S052" },
  { username: "emartin", realName: "Emily Martin", date: "2026-10-06", loginTime: "09:00 AM", logoutTime: "10:30 AM", sessionId: "S053" },
  { username: "emartin", realName: "Emily Martin", date: "2026-10-11", loginTime: "11:00 AM", logoutTime: "12:00 PM", sessionId: "S054" },
  { username: "emartin", realName: "Emily Martin", date: "2026-10-17", loginTime: "01:00 PM", logoutTime: "03:00 PM", sessionId: "S055" },

  { username: "bjackson", realName: "Brian Jackson", date: "2026-09-22", loginTime: "09:00 AM", logoutTime: "10:30 AM", sessionId: "S056" },
  { username: "bjackson", realName: "Brian Jackson", date: "2026-09-29", loginTime: "10:00 AM", logoutTime: "12:00 PM", sessionId: "S057" },
  { username: "bjackson", realName: "Brian Jackson", date: "2026-10-04", loginTime: "01:00 PM", logoutTime: "02:00 PM", sessionId: "S058" },
  { username: "bjackson", realName: "Brian Jackson", date: "2026-10-08", loginTime: "09:30 AM", logoutTime: "11:00 AM", sessionId: "S059" },
  { username: "bjackson", realName: "Brian Jackson", date: "2026-10-12", loginTime: "10:00 AM", logoutTime: "12:00 PM", sessionId: "S060" },
  { username: "bjackson", realName: "Brian Jackson", date: "2026-10-17", loginTime: "09:00 AM", logoutTime: "10:30 AM", sessionId: "S061" },

  { username: "lrobinson", realName: "Lisa Robinson", date: "2026-09-19", loginTime: "10:00 AM", logoutTime: "11:30 AM", sessionId: "S062" },
  { username: "lrobinson", realName: "Lisa Robinson", date: "2026-09-27", loginTime: "09:00 AM", logoutTime: "10:30 AM", sessionId: "S063" },
  { username: "lrobinson", realName: "Lisa Robinson", date: "2026-10-01", loginTime: "01:00 PM", logoutTime: "03:00 PM", sessionId: "S064" },
  { username: "lrobinson", realName: "Lisa Robinson", date: "2026-10-05", loginTime: "10:00 AM", logoutTime: "12:00 PM", sessionId: "S065" },
  { username: "lrobinson", realName: "Lisa Robinson", date: "2026-10-10", loginTime: "09:30 AM", logoutTime: "11:00 AM", sessionId: "S066" },
  { username: "lrobinson", realName: "Lisa Robinson", date: "2026-10-16", loginTime: "01:00 PM", logoutTime: "02:30 PM", sessionId: "S067" },

  { username: "dclark", realName: "Daniel Clark", date: "2026-09-20", loginTime: "09:30 AM", logoutTime: "11:00 AM", sessionId: "S068" },
  { username: "dclark", realName: "Daniel Clark", date: "2026-09-25", loginTime: "10:00 AM", logoutTime: "12:00 PM", sessionId: "S069" },
  { username: "dclark", realName: "Daniel Clark", date: "2026-10-02", loginTime: "01:00 PM", logoutTime: "03:00 PM", sessionId: "S070" },
  { username: "dclark", realName: "Daniel Clark", date: "2026-10-07", loginTime: "09:00 AM", logoutTime: "10:30 AM", sessionId: "S071" },
  { username: "dclark", realName: "Daniel Clark", date: "2026-10-12", loginTime: "11:00 AM", logoutTime: "12:30 PM", sessionId: "S072" },
  { username: "dclark", realName: "Daniel Clark", date: "2026-10-17", loginTime: "09:00 AM", logoutTime: "11:00 AM", sessionId: "S073" },

  { username: "mlewis", realName: "Michelle Lewis", date: "2026-09-18", loginTime: "09:00 AM", logoutTime: "10:00 AM", sessionId: "S074" },
  { username: "mlewis", realName: "Michelle Lewis", date: "2026-09-23", loginTime: "01:00 PM", logoutTime: "03:00 PM", sessionId: "S075" },
  { username: "mlewis", realName: "Michelle Lewis", date: "2026-09-30", loginTime: "09:30 AM", logoutTime: "11:30 AM", sessionId: "S076" },
  { username: "mlewis", realName: "Michelle Lewis", date: "2026-10-05", loginTime: "10:00 AM", logoutTime: "12:00 PM", sessionId: "S077" },
  { username: "mlewis", realName: "Michelle Lewis", date: "2026-10-09", loginTime: "09:00 AM", logoutTime: "10:30 AM", sessionId: "S078" },
  { username: "mlewis", realName: "Michelle Lewis", date: "2026-10-15", loginTime: "11:00 AM", logoutTime: "01:00 PM", sessionId: "S079" },

  { username: "tanderson", realName: "Taylor Anderson", date: "2026-09-21", loginTime: "10:00 AM", logoutTime: "11:00 AM", sessionId: "S080" },
  { username: "tanderson", realName: "Taylor Anderson", date: "2026-09-28", loginTime: "09:00 AM", logoutTime: "10:30 AM", sessionId: "S081" },
  { username: "tanderson", realName: "Taylor Anderson", date: "2026-10-03", loginTime: "11:00 AM", logoutTime: "12:30 PM", sessionId: "S082" },
  { username: "tanderson", realName: "Taylor Anderson", date: "2026-10-08", loginTime: "01:00 PM", logoutTime: "03:00 PM", sessionId: "S083" },
  { username: "tanderson", realName: "Taylor Anderson", date: "2026-10-13", loginTime: "09:30 AM", logoutTime: "11:00 AM", sessionId: "S084" },
  { username: "tanderson", realName: "Taylor Anderson", date: "2026-10-17", loginTime: "10:00 AM", logoutTime: "12:00 PM", sessionId: "S085" },

  { username: "nwhite", realName: "Nicole White", date: "2026-09-22", loginTime: "09:30 AM", logoutTime: "11:00 AM", sessionId: "S086" },
  { username: "nwhite", realName: "Nicole White", date: "2026-09-29", loginTime: "", logoutTime: "", sessionId: "" }
];


const new_records = attendanceRecords.sort((a,b) => b.date.localeCompare(a.date));



const currentDate = new Date().toLocaleDateString("en-US", {

    weekday: "short",
    month: "short",
    day: "numeric"
})





function getDuration(record) {

if (!record.loginTime || !record.logoutTime) return "—";

  const toMinutes = (time) => {
    let [hours, minutes] = time.split(/[: ]/);
    const period = time.slice(-2);

    hours = Number(hours);
    minutes = Number(minutes);

    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;

    return hours * 60 + minutes;
  };

  let duration = toMinutes(record.logoutTime) - toMinutes(record.loginTime);
  if (duration < 0) duration += 1440;

  return `${Math.floor(duration / 60)}h ${duration % 60}m`;
}




export default function Attendance(){

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const page_end = currentPage * rowsPerPage;

    const page_start = page_end -rowsPerPage;
    const totalPages = Math.ceil(new_records.length/rowsPerPage);

    const paginatedRecords = new_records.slice(page_start, page_end);



    return(


        <div className="dashboard-main">

            <Sidebar/>

            <div className="dashboard-right">

                <div className="dashboard-right-header">


                                <div className="breadcrumb">
                                    Workspace <span>/</span>
                                    Attendance</div>


                                    
                                <div className="dashboard-right-header-right">

                                    <span>{currentDate}</span>

                                    <div>A</div>

                                    </div>
                </div>




                
                <div className="dashboard-right-content">

                      
                <div className="dashboard-right-content-top">

                 <div className="dashboard-right-content-left">
            <p className="eyebrow">RECORDS</p>
            <h1>Attendance history</h1>
            <p className="page-description">Browse, search, and export imported attendance rows.</p>
          </div>



          <div className="dashboard-right-content-top-right">

            <button className="dashboard-right-content-top-button1">Export CSV</button>
                        <button className="dashboard-right-content-top-button2">Import CSV</button>

          </div>

                </div>


                      
                <div className="dashboard-right-content-bottom">

                                    <div className="dashboard-right-content-bottom-first">

                                        <div className="dashboard-right-content-search">
 <span className="icon">⌕</span>
  <input type="text" placeholder="Search players by name or username" />
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



  <div className="dashboard-right-content-bottom-second">


      <div className="dashboard-right-content-bottom-second-label-space">

        <label>
        From
        </label>
        <input
        type="date"></input>

        </div>


          <div className="dashboard-right-content-bottom-second-label-space">

        <label>
        To
        </label>
        <input type="date"></input>

        </div>


    </div>



      <div className="dashboard-right-content-bottom-table-cont">


           <table className="dashboard-right-content-table">
      <thead>

        <tr>
          <th>Player</th>
          <th>Date</th>
          <th>Login</th>
          <th>Logout</th>

       <th>Duration</th>
          <th>Notes</th>
        </tr>
      </thead>


      <tbody>
{paginatedRecords.map((r,index) =>(
        <tr key={index}>
            <td><button><span>{r.realName.split(" ").map(name =>name[0]).join("").toUpperCase()}</span>
             <span className="table-name-space">
      <strong>{r.realName}</strong>
      <small>{r.username}</small>
    
    </span>
      </button>      
            </td>


            <td>{new Date(r.date + "T00:00:00").toLocaleDateString("en-US", {
                
                month: "short",
                day: "numeric",
                year: "numeric"})}</td>


                <td>{r.loginTime}</td>
                                <td>{r.logoutTime}</td>
                                    <td>{getDuration(r)}</td>
                                    <td>{r.notes ? r.notes : "—"}</td>

        </tr>
))
}


      </tbody>
    </table>

      <div>
        <span className="pagination attendance">


            <span>{page_start +1}–{Math.min(page_end, new_records.length)} of {new_records.length} rows</span>



            <div className="pagination-buttons">

                <button onClick={() => setCurrentPage(currentPage -1)}
                    disabled ={currentPage ===1}>Previous</button>
                    
                    
                            <span>Page {currentPage} of {totalPages}</span>

                    
                      <button
                      onClick={() => setCurrentPage(currentPage +1)}
                      disabled ={currentPage === totalPages}>Next</button> 
            
            </div>
        </span>
    </div>

        </div>

                            
                </div>




                </div>



            </div>

        </div>


    )
}