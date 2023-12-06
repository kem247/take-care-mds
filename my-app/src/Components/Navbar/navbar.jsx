import React from "react";
import { NavLink } from "react-router-dom";
export default function navbar() {
    return (
        <head>
            <meta http-equiv="origin-trial" content="Az520Inasey3TAyqLyojQa8MnmCALSEU29yQFW8dePZ7xQTvSt73pHazLFTK5f7SyLUJSo2uKLesEtEa9aUYcgMAAACPeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZyIsImV4cGlyeSI6MTcyNTQwNzk5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0="></meta>
            <meta charset="UTF-8"></meta>
        
             <div class="container"> 
                <div class="nav-bar">
                    <nav>
                     <NavLink to="/booking">Booking</NavLink>
                     </nav>
                </div>
             </div>
        </head>

    )
}