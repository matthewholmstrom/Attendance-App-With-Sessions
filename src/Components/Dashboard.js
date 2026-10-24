import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";



const currentDate = new Date().toLocaleDateString("en-US", {

    weekday: "short",
    month: "short",
    day: "numeric"


});


const date_ranges = [
  ["7", "7 days"],
  ["14", "14 days"],
  ["30", "30 days"],
  ["90", "90 days"],
  ["6months", "6 months"],
  ["12months", "12 months"],
  ["year", "This year"],
  ["lastyear", "Last year"],
  ["all", "All dates"],
  ["custom", "Custom"],
];



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




  function filterRecordsByDate(records, selectedDate) {
  const now = new Date();

  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  let startDate;
  let endDate = new Date(today);

  if (selectedDate === "all") {
    return records;
  }


  if (selectedDate === "custom") {
    return records;
  }

  switch (selectedDate) {
    case "7":
    case "14":
    case "30":
    case "90": {
      startDate = new Date(today);

      startDate.setDate(
        today.getDate() - (Number(selectedDate) - 1)
      );

      endDate.setHours(23, 59,59, 999);

      break;
    }

    case "6months":
      startDate = new Date(today);
      startDate.setMonth(today.getMonth() - 6);
      endDate.setHours(23, 59, 59, 999);
      break;

    case "12months":
      startDate = new Date(today);
      startDate.setFullYear(today.getFullYear() - 1);
      endDate.setHours(23, 59, 59,999);
      break;

    case "year":
      startDate = new Date(today.getFullYear(), 0, 1);
      endDate.setHours(23,59,59,999);
      break;

    case "lastyear":
      startDate = new Date(
        today.getFullYear() - 1, 0, 1
      );

      endDate = new Date(today.getFullYear(), 0, 1);
      break;

    default:
      return records;
  }

  return records.filter((record) => {
    const date = new Date(`${record.date}T12:00:00`);


    if(selectedDate === "lastyear"){

      return date >= startDate && date <endDate
    }

    return date >= startDate && date <= endDate;
  });
}





export default function Dashboard (){

  const [selectedDate, setSelectedDate] = useState("30");
  const [searchName, setSearchName] = useState("");

  const filtered_records = filterRecordsByDate(attendanceRecords, selectedDate);

  

const new_records = [...filtered_records].sort((a,b) => b.date.localeCompare(a.date));




let avg_session_duration_sum = 0;
let valid_session_count = 0;



for (const record of new_records) {

  if (!record.loginTime || !record.logoutTime) {
    continue;
  }

  function timeToMinutes(time) {
    const [clock, period] = time.split(" ");
    let [hours, minutes] = clock.split(":").map(Number);

    if (period === "AM" && hours === 12) {
      hours = 0;
    } else if (period === "PM" && hours !== 12) {
      hours += 12;
    }

    return hours * 60 + minutes;
  }

  const loginMinutes = timeToMinutes(record.loginTime);
  const logoutMinutes = timeToMinutes(record.logoutTime);

  const duration = logoutMinutes - loginMinutes;


  if (duration >= 0) {
    avg_session_duration_sum += duration;
    valid_session_count++;
  }
}

const avg_session_duration =
  valid_session_count > 0
    ? Math.round(avg_session_duration_sum / valid_session_count)
    : 0;

const avg_hours = Math.floor(avg_session_duration / 60);
const avg_minutes = avg_session_duration % 60;

const avg_session_display =
  `${avg_hours}h ${avg_minutes}m`;



const recent_rows = new_records.filter((record) => record.date === new_records[0]?.date);

const recent_rows2 = recent_rows.slice(0,6);

const most_recent_date = recent_rows2[0]?.date;

const formattedDate = new Date(`${most_recent_date}T12:00:00`).toLocaleDateString("en-US", {

  month: "short",
  day: "numeric",
  year: "numeric"
});







const total_rows = new_records.length;

let player_accounts = new Set(new_records.map((r,index) => r.username)).size;

let totalAttendanceDates = new Set(new_records.map(r => r.date)).size;

const attendanceCounts = {};

for (const record of new_records) {
  // A recorded login means the player attended.
  // Logout time is not required.
  if (!record.loginTime || !record.username) {
    continue;
  }

  if (!attendanceCounts[record.date]) {
    attendanceCounts[record.date] = new Set();
  }

  // Count each player only once per day,
  // even if they have multiple sessions.
  attendanceCounts[record.date].add(record.username);
}

const chartData = Object.entries(attendanceCounts)
  .map(([date, players]) => ({
    date,
    count: players.size,
    label: new Date(`${date}T12:00:00`).toLocaleDateString(
      "en-US",
      {
        month: "short",
        day: "numeric",
      }
    ),
  }))
  .sort((a, b) => a.date.localeCompare(b.date));



const attendanceCounts2 = {};

new_records.forEach((record) => {
  if (!attendanceCounts2[record.username]) {
    attendanceCounts2[record.username] = {
      username: record.username,
      realName: record.realName,
      dates: new Set(),
    };
  }

  attendanceCounts2[record.username].dates.add(record.date);
});


const frequentAttendees = Object.values(attendanceCounts2)
  .map((player) => ({
    username: player.username,
    realName: player.realName,
    daysAttended: player.dates.size,
  }))
  .sort((a, b) => b.daysAttended - a.daysAttended);


  const five_count_frequent = frequentAttendees.slice(0,5);



  function getDailyChartData(selectedDate, chartData) {
  if (!["7", "14", "30", "90"].includes(selectedDate)) {
    return chartData;
  }

  const countsByDate = Object.fromEntries(
    chartData.map((item) => [item.date, item.count])
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days = Number(selectedDate);

  return Array.from({ length: days }, (_, index) => {
    const date = new Date(today);

    date.setDate(today.getDate() - (days - 1 - index));

    const dateKey = [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getDate()).padStart(2, "0"),
    ].join("-");

    return {
      date: dateKey,
      count: countsByDate[dateKey] ?? 0,
      label: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    };
  });
}


const dailyChartDate = getDailyChartData(selectedDate, chartData);



    return(

        <div className="attendance-main">

            <Sidebar></Sidebar>


      <div className="attendance-right">

                <div className="attendance-right-header">


                                <div className="breadcrumb">
                                    Workspace <span>/</span>
                                    Dashboard</div>

                                    
                                <div className="attendance-right-header-right">

                                    <span> {currentDate}</span>

                                    <div>A</div>

                                    </div>


                                    </div>



                                    <div className="attendance-right-content">


                                         <div className="attendance-right-content-top">

                 <div className="attendance-right-content-left">
            <p className="eyebrow">CLUB OVERVIEW
</p>
            <h1>Attendance
</h1>
            <p className="page-description">A clear view of who attended and when.
</p>
          </div>


                </div>

                                                         <div className="attendance-right-content-bottom">



                                                               <div className="attendance-right-content-bottom-row-1">


                                                                <div className="filter-row">

          <div className="range-buttons">

            {date_ranges.map(([value, label]) =>(


<button className= {`range-button ${selectedDate === value ? "active" : ""}`}

key={value}

onClick={() => setSelectedDate(value)}>{label}</button>

            ))}


          </div>




    {selectedDate === "custom" && (<div className="custom-date-fields">
              <label>From <input type="date"  /></label>
              <label>To <input type="date"  /></label>
            </div>
    )

    }


          </div>

                                                            </div>                              

                                                               <div className="attendance-right-content-bottom-row-2">


                                                                 <div className="attendance-right-content-bottom-row-card">

                                                                    <div className="stat-card">
      <div className="stat-top"><span>Attendance rows</span><span className="stat-icon">▤</span></div>
      <strong className="stat-value">{total_rows}</strong>
      <span className="stat-detail">Imported attendance entries</span>
    </div>
                                                                    </div>


                                                                    
                                                                 <div className="attendance-right-content-bottom-row-card">

                                                                    <div className="stat-card">
      <div className="stat-top"><span>Players</span><span className="stat-icon">♙</span></div>
      <strong className="stat-value">{player_accounts}</strong>
      <span className="stat-detail">Distinct player accounts
</span>
    </div>
                                                                    </div>



                                                                 <div className="attendance-right-content-bottom-row-card">

                                                                    <div className="stat-card">
      <div className="stat-top"><span> Attendance dates
</span><span className="stat-icon">▦</span></div>
      <strong className="stat-value">{totalAttendanceDates}</strong>
      <span className="stat-detail">Days with at least one entry
</span>
    </div>
                                                                    </div>





                                                                 <div className="attendance-right-content-bottom-row-card">

                                                                    <div className="stat-card">
      <div className="stat-top"><span>Average session
</span><span className="stat-icon">◷</span></div>
      <strong className="stat-value">{avg_session_display}
</strong>
      <span className="stat-detail">Sessions with both login and logout times recorded: {valid_session_count}

</span>
    </div>
                                                                    </div>


                                                            </div>

                                                                                     

                                                               <div className="attendance-right-content-bottom-row-3">


                                                                <div className="attendance-graph-card">


                                                                     <section className="panel chart-panel">
          <div className="panel-heading">
            <div>
              <h2>Attendance over time</h2>
              <p>Unique players attending each day.</p>
            </div>
            <span className="subtle-tag">Daily view</span>
          </div>


<div className="chart-summary">
          <div className="chart-summary-div">
            <span className="eyebrow">UNIQUE ATTENDEES</span>
            <strong>{new_records.length.toLocaleString()}</strong>
          </div>
          <span className="chart-period">
Sep 18, 2026 – Oct 17, 2026
          </span>
        </div>


  <div className="bar-chart">
        {dailyChartDate.map((item) => (
          <div className="bar-column" key={item.date}>
  <div className="bar-track">
    <div
      className="bar"
      style={{
        height: `${
          (item.count /
            Math.max(...dailyChartDate.map((d) => d.count), 1)) *
          100
        }%`,
      }}
      title={`${item.label}: ${item.count} unique attendees`}
    />
  </div>

  <span className="bar-count">{item.count}</span>
  <span className="bar-label">{item.label}</span>
</div>
        ))}
      </div>


        </section>


      <div className="bar-chart-last-message">Daily attendance rows · Hover over a bar to see its date and count</div>

                                                                </div>     


                                                            </div>


                                                            

                                                               <div className="attendance-right-content-bottom-row-4">


                                                                    <div className="attendance-right-content-bottom-row-4-card1">

                                                                     <div className="panel-heading2">
              <div>
                <h2>Recent attendance</h2>
                <p>Latest entries in the selected period.</p>
              </div>
              <Link to ="/attendance" className="text-button">View all <span>→</span></Link>
            </div>
                                                                                                                                        

                                              <div className="attendance-row4-card-table">


                                                <table className="attendance-row4-table">

                                                  <thead>

                                                <tr>
                                                  <th>Player</th>
                                                  <th>Date</th>
                                                  <th>Login</th>
                                                  <th>Logout</th>

          
                                                </tr>


                    
                                              </thead>


                                              <tbody>


                                                {recent_rows2.map((r,index) =>(

                                                  <tr key={index}>

                                                    <td><button><span>{r.realName.split(" ").map(name =>name[0]).join("").toUpperCase()}</span>
             <span className="table-name-space">
      <strong>{r.realName}</strong>
      <small>{r.username}</small>
    
    </span>
      </button>      
            </td>
                                                  <td>{formattedDate}</td>

                                                    <td>{r.loginTime}</td>

                                                    <td>{r.logoutTime}</td>

                                                  </tr>



                                                ))}



                                              </tbody>

                                                </table>



                                              </div>

                                                                    </div>


                                                                    
                                                                    <div className="attendance-right-content-bottom-row-4-card2">

                                                                                   <div className="panel-heading2">
              <div>
                <h2>Frequent attendees</h2>
                <p>Most attendance rows in this period.

</p>
              </div>
              
            </div>

            
                                              <div className="attendance-row4-card-table">


                                                <table className="attendance-row4-table">



                                              <tbody>


                                                {five_count_frequent.map((r,index) =>(

                                                  <tr key={index}>

                                                    <td><button><span>{r.realName.split(" ").map(name =>name[0]).join("").toUpperCase()}</span>
             <span className="table-name-space">
      <strong>{r.realName}</strong>
      <small>{r.username}</small>
    
    </span>
      </button>      
            </td>
                                                  <td>{r.daysAttended}</td>

                                                   

                                                  </tr>



                                                ))}



                                              </tbody>

                                                </table>



                                              </div>


                                                                      
                                                                    </div>



                                                            


                                                            </div>







                                                            </div>






                                    </div>


        </div>

        </div>

    )







}