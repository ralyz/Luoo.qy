import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { remote } from 'electron';
import electron from 'electron';

const openExternal = electron.shell.openExternal;
const main = remote.require('./main');
electron.webFrame.setVisualZoomLevelLimits(1, 1);


ReactDOM.render(
    <div>
        <App
            getVolList={main.getVolList()}
            getSingleList={main.getSingleList()}
            openExternal={openExternal}
        />
    </div>,
    document.getElementById('root')
);
