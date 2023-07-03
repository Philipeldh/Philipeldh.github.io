import {Outlet} from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';


export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>Philip Eldh</h1>
          <nav>
            <ul>
              <li>
                <a>
                    <Button href="/experience" variant="contained">
                        Experiences
                    </Button>
                    </a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }