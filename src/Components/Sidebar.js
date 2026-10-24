import React from "react";
import { NavLink } from "react-router-dom";




export default function Sidebar (){


    return(

<div className="sidebar-main">


<div className="sidebar-top-gap">

<div className="sidebar-top">


<div className="sidebar-top-left">
C
</div>

<div className="sidebar-top-right"><strong>Collective</strong>
<span>Attendance Manager</span>
</div>

</div>



<div className="sidebar-middle">

<div className="workspace">Workspace</div>

<div className="sidebar-middle-nav">

    <NavLink to ='/' end><span>▦</span>Dashboard<span className="label-mark"></span>
    </NavLink>


     <NavLink to ='/attendance'><span>☷</span>Attendance

    </NavLink>

    <NavLink to ='/players'><span>♙</span>Players

    </NavLink>

     <NavLink to ='/csv'><span>⇧</span>CSV imports

    </NavLink>

</div>

</div>


</div>


<div className="sidebar-bottom">


<div className="sidebar-bottom-first">


     <span className="status-dot"></span>
    <span className="sidebar-bottom-gap">
      <strong>Local data</strong>
      <small>Saved in this browser</small>
    </span>

</div>


<div className="sidebar-bottom-second">
Attendance records are not synced to other devices.

</div>



</div>


</div>
    )
}