import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { TerraMain } from './terra_main';
import { TerraTest } from './terra_test';
import { KavaMain } from './kava_main';
import { IRISMain } from './iris_main';
import { CertikMain } from './certik_main';
import { RegenMain } from './regen_main';
import { BitSongMain } from './bitsong_main';
import { Node } from './node';

ReactDOM.render(
  <React.StrictMode>
    <TerraMain name="terravaloper15qjn7ke9s47qn4mte3lerkxtjjgp38n5qquzsu"/>
  </React.StrictMode>,
  document.getElementById('terra_1')
);

ReactDOM.render(
  <React.StrictMode>
    <TerraMain name="terravaloper13307pxehvt0qply3kw9vk578u4az0u4mu9eef4" />
  </React.StrictMode>,
  document.getElementById('terra_2')
);

ReactDOM.render(
  <React.StrictMode>
    <TerraTest name="terravaloper1n9jrtnz57zupejzhu4v0uth9ax5fktdenxy8hm" />
  </React.StrictMode>,
  document.getElementById('terra_3')
);

ReactDOM.render(
  <React.StrictMode>
    <TerraTest name="terravaloper1f4d3gkp544x8rswn229eas2vsj60uvc8mmppsq" />
  </React.StrictMode>,
  document.getElementById('terra_4')
);

ReactDOM.render(
  <React.StrictMode>
    <KavaMain name="kavavaloper1x9hq3rjc48t5upcsr3c209ycgekfasne3l5nkc" />
  </React.StrictMode>,
  document.getElementById('kava_1')
);

ReactDOM.render(
  <React.StrictMode>
    <IRISMain name="iva1az3y7j3ncfxude5t9n9sry39acgn7dpejds8gf" />
  </React.StrictMode>,
  document.getElementById('iris_1')
);

ReactDOM.render(
  <React.StrictMode>
    <CertikMain name="certikvaloper10p82lkcnkpe5ax9090uv2ypp2heen0s7aenx0p" />
  </React.StrictMode>,
  document.getElementById('certik_1')
);

ReactDOM.render(
  <React.StrictMode>
    <RegenMain name="regenvaloper1fe6afzsuqyj08zmx3pacs2nxz33cymvfsj5t9t" />
  </React.StrictMode>,
  document.getElementById('regen_1')
);

ReactDOM.render(
  <React.StrictMode>
    <BitSongMain name="bitsongvaloper18nqd69k3kgns9tyvq8e8supsvx9wgwwu60c9np" />
  </React.StrictMode>,
  document.getElementById('bitsong_1')
);

ReactDOM.render(
  <React.StrictMode>
    <Node name="http://202.61.253.70:3000" />
  </React.StrictMode>,
  document.getElementById('node_1')
);

ReactDOM.render(
  <React.StrictMode>
    <Node name="http://45.9.60.250:3000" />
  </React.StrictMode>,
  document.getElementById('node_2')
);

ReactDOM.render(
  <React.StrictMode>
    <Node name="http://193.26.159.233:3000" />
  </React.StrictMode>,
  document.getElementById('node_3')
);

ReactDOM.render(
  <React.StrictMode>
    <Node name="http://202.61.228.167:3000" />
  </React.StrictMode>,
  document.getElementById('node_4')
);

ReactDOM.render(
  <React.StrictMode>
    <Node name="http://192.145.46.214:3000" />
  </React.StrictMode>,
  document.getElementById('node_5')
);

ReactDOM.render(
  <React.StrictMode>
    <Node name="http://176.9.47.69:3000" />
  </React.StrictMode>,
  document.getElementById('node_6')
);

ReactDOM.render(
  <React.StrictMode>
    <Node name="http://176.9.47.69:3000" />
  </React.StrictMode>,
  document.getElementById('node_7')
);

ReactDOM.render(
  <React.StrictMode>
    <Node name="http://176.9.47.69:3000" />
  </React.StrictMode>,
  document.getElementById('node_8')
);

ReactDOM.render(
  <React.StrictMode>
    <Node name="http://176.9.47.69:3000" />
  </React.StrictMode>,
  document.getElementById('node_9')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
