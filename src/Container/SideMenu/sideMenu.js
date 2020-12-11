import React from 'react';
import './sideMenu.css'

const SideMenu = ({onPageSelect}) => {
        return(
            <div className="sidemenu ">
               <div className="menu-list">
               <ul>
                    {/* <hr/> */}
                    <li>
                        <h3 className="item " onClick = {() => onPageSelect("dashboard")} >Dashboard</h3>
                    </li>
                    {/* <hr/> */}
                    <li>
                        <h3 className="item" onClick = {() => onPageSelect("enrolment")}>Enrolment</h3>
                    </li>
                    {/* <hr/> */}
                    <li>
                        <h3 className="item" onClick = {() => onPageSelect("accreditatiion")}>Accreditation</h3>
                    </li>
                    {/* <hr/> */}
                    <li>
                        <h3 className="item" onClick = {() => onPageSelect("subscription")}> Subscription</h3>
                    </li>
                    {/* <hr/> */}
                    <li>
                        <h3 className="item" onClick = {() => onPageSelect("service")}> Service Usage</h3>
                    </li>
                    {/* <hr/> */}
                    <li>
                        <h3 className="item" onClick = {() => onPageSelect("report")}> Report</h3>
                    </li>
                    {/* <hr/> */}
               </ul>
               </div>
            </div>
        );
    }


export default SideMenu;