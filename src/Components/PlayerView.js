
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";

const currentDate = new Date().toLocaleDateString("en-US",{

    month: "short",
    weekday: "short",
    year: "numeric"
    
});




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



let sorted_records = [...attendanceRecords].sort((a,b) => b.date.localeCompare(a.date));






export default function PlayerView() {



    const {username} = useParams();


    let name = "";
    const [currentPage, setCurrentPage] = useState(1);


    for(let i of attendanceRecords){

    if(i.username === username){

        name = i.realName;

    }
}

const distinct_dates = [...new Set(attendanceRecords.filter(r => r.date && r.username === username).map((r) => r.date))];

let distinct_date_count = distinct_dates.length;

let record_count = 0;

for(let i of attendanceRecords){

    if(i.username ===username){

        record_count++;
    }
}

let totalMinutes = 0;

let completeRows = 0;

const initials = name.split(" ").map(name => name[0]).join("").toUpperCase();




let most_recent_date = 0;

for(let i of sorted_records){

    if(i.username === username){

        most_recent_date = i.date;
        break;
    }
};




function timeToMinutes(time){


    const [clock, period] = time.split(" ");

    let [hours, minutes] = clock.split(":").map(Number);

    if(period === "PM" && hours !== 12){

        hours+=12;
    }

     if(period === "AM" && hours === 12){

        hours=0;
    }

    return hours * 60 + minutes;
}

attendanceRecords.forEach(record => {
    if (record.loginTime && record.logoutTime && record.username === username) {
        const login = timeToMinutes(record.loginTime);
        const logout = timeToMinutes(record.logoutTime);

        totalMinutes += logout - login;
        completeRows++;
    }
});

const hours = Math.floor(totalMinutes/60)

const minutes = totalMinutes % 60;

const total_time = `${hours}h ${minutes}m`;







const date = new Date(most_recent_date + "T12:00:00");

const month = date.toLocaleString("en-US", {month: "short"});

const day = date.getDate();
const year = date.getFullYear();


const playerRecords = attendanceRecords
    .filter(r => r.username === username)
    .sort((a, b) => b.date.localeCompare(a.date));


const groupedRecords = {};

for(const record of playerRecords){

    if(!groupedRecords[record.date]){

        groupedRecords[record.date] = []
    }

    groupedRecords[record.date].push(record)


}



const getDuration = (loginTime, logoutTime) =>{

    const login = timeToMinutes(loginTime);
    const logout = timeToMinutes(logoutTime);

    const totalMinutes = logout-login;

    const hours = Math.floor(totalMinutes/60);

    const minutes = totalMinutes % 60;

    if(hours ===0){


        return `${minutes}m`;
    }

    return `${hours}h ${minutes}m`;




}



const displayData = Object.entries(groupedRecords).map(
    ([date, records]) => {
        const formattedDate = new Date(date + "T12:00:00")
            .toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric"
            });

        const entries = records
            .filter(r => r.loginTime && r.logoutTime)
            .sort((a, b) =>
                timeToMinutes(b.loginTime) -
                timeToMinutes(a.loginTime)
            )
            .map((record, index) => ({
                entry: `Entry ${index + 1}`,
                loginTime: record.loginTime,
                logoutTime: record.logoutTime,
                duration: getDuration(
                    record.loginTime,
                    record.logoutTime
                )
            }));

        return {
            date: formattedDate,
            rowCount: entries.length,
            entries: entries
        };
    }
);



const rowsPerPage = 10;

const page_end = currentPage * rowsPerPage;
const page_start = page_end - rowsPerPage;

const totalPages = Math.ceil(displayData.length/rowsPerPage);

const paginatedRecords = displayData.slice(page_start, page_end);







  return (
    <div className="player-view-main">

        <Sidebar>

        </Sidebar>


            <div className="player-view-main-right">


                
                <div className="dashboard-right-header">


                                <div className="breadcrumb">
                                    Workspace <span>/</span>
                                    Player Profile</div>


                                    
                                <div className="dashboard-right-header-right">

                                    <span>{currentDate}</span>

                                    <div>A</div>

                                    </div>
                </div>



                                <div className="dashboard-right-content">



                                <div className="playerview-right-content-top">


                                    <Link className="playerview-right-content-top-link"><span>←</span>Back to players</Link>



                                    <div className="player-profile-header">

                                     <span className="avatar avatar-large">{initials}</span>

                                     <div className="profile-name"><p className="eyebrow">PLAYER PROFILE</p><h1>{name}</h1><p>@{username}</p></div>



                                    </div>


                            
                                    </div>



                                     <div className="playerview-right-content-bottom">


                                     <div className="playerview-right-content-bottom-row1">



                                <div className="playerview-right-content-bottom-row1-card1">


                                                                                            <div className="stat-card">
      <div className="stat-top"><span>Attendance dates</span><span className="stat-icon">▦</span></div>
      <strong className="stat-value">{distinct_date_count}</strong>
      <span className="stat-detail">Distinct dates attended · all time</span>
    </div>

                                    </div>




                                    <div className="playerview-right-content-bottom-row1-card1">

                                                                                            <div className="stat-card">
      <div className="stat-top"><span>Attendance rows</span><span className="stat-icon">▤</span></div>
      <strong className="stat-value">{record_count}</strong>
      <span className="stat-detail">Rows in imported data · all time</span>
    </div>

                                    </div>

                                    

                                    <div className="playerview-right-content-bottom-row1-card1">

                                                                                            <div className="stat-card">
      <div className="stat-top"><span>Recorded time</span><span className="stat-icon">◷</span></div>
      <strong className="stat-value">{total_time}</strong>
      <span className="stat-detail">{completeRows} rows with complete times · all time</span>
    </div>

                                    </div>


                                    <div className="playerview-right-content-bottom-row1-card1">

                                                                                            <div className="stat-card">
      <div className="stat-top"><span>Last attended</span><span className="stat-icon">◷</span></div>
      <strong className="stat-value">{month} {day}</strong>
      <span className="stat-detail">{year}</span>
    </div>

                                    </div>



                                        </div>



                                          <div className="playerview-right-content-bottom-row2">



                                     <div className="playerview-right-content-bottom-row2-card">



    <div className="playersview-row1-card2-space">
                                        <div className="panel-heading">
            <div><h2>Attendance history</h2><p>Sessions are listed separately when the source data contains separate rows.</p></div>
            
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






{displayData.map((r,index) =>(


<div key={index}>

    <div className="playerview-card2-div-top">


        <strong>{r.date}</strong>


        <span>{r.rowCount} {r.rowCount === 1? "row": "rows" } </span>


    </div>







{r.entries.map((z, index) =>(

     <div className="playerview-card2-div-bottom">

      
                <div className="history-row">
                      <span className="history-session">Entry {index + 1}</span>
                      <span>{z.loginTime}</span>
                      <span>{z.logoutTime}</span>
                      <span>{z.duration}</span>
                    </div>

    </div>

    ))}

    </div>

))}



    <div>
        <span className="pagination playersview">


            <span>{page_start +1}–{Math.min(page_end, displayData.length)} of {displayData.length} rows</span>



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

    </div>
  );
}



/*

  <div className="dashboard-right-content-top">

                 <div className="dashboard-right-content-left">
            <p className="eyebrow">RECORDS</p>
            <h1>Attendance history</h1>
            <p className="page-description">{username}</p>
          </div>



          <div className="dashboard-right-content-top-right">

            <button className="dashboard-right-content-top-button1">Export CSV</button>
                        <button className="dashboard-right-content-top-button2">Import CSV</button>

          </div>

                </div>
*/