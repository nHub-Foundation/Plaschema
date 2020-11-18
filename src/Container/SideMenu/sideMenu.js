import React from 'react';
import './sideMenu.css'

class SideMenu extends React.Component{
    render(){
        return(
            <div className="sidemenu">
                <li>Dashboard</li>
                <hr/>
                <li>Enrolment</li>
                <hr/>
                <li>Accreditation</li>
                <hr/>
                <li>Subscription</li>
                <hr/>
                <li>Service Usage</li>
                <hr/>
                <li>Reports</li>
                <hr/>
            </div>
        );
    }
}

export default SideMenu;