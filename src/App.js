import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Payungsak's Certificate Wall.</h1>
        <h2>Cisco Certified Network Associate.</h2>
        <img src="https://s3.paov6.network/CCNA/NEW-CCNA.jpg" alt="CCNA" weight="500" height="300"></img>
        <h2>CCNAx 3.0 Completed Certificate.</h2>
        <img src="https://s3.paov6.network/CCNA/CCNAX.jpg" alt="CCNAx" weight="500" height="300"></img>
      <h2>Hurricane Electric IPv6 Certificate.</h2>
      <img src="https://s3.paov6.network/HE/IPv6-HE-Cert.png" alt="HEIPv6" weight="500" height="300"></img>
      <h2>Udemy BGP Online Course Certificate.</h2>
      <img src="https://s3.paov6.network/Udemy/BGP-Cert-JPG.jpg" alt="BGP" weight="500" height="300"></img>
      <h2>Udemy MPLS Core Tech.</h2>
      <img src="https://s3.paov6.network/certs/mpls-core-tech-udemy.jpg" alt="BGP" weight="500" height="300"></img>
      <h2>Cisco Connect ASEAN. - 2020</h2>
      <img src="https://s3.paov6.network/certs/cisco-connect-asean-2020.png" alt="Cisco" weight="500" height="300"></img>
      <h2>Cisco Learn A-thon. (Lab)</h2>
      <img src="https://s3.paov6.network/certs/CiscoLearnAtron-Cert-JPG.jpg" alt="Cisco" weight="500" height="300"></img>
      <h2>Cisco Network Academy - Intro Cyber Sec.</h2>
      <img src="https://s3.paov6.network/certs/CiscoNetAcadI-ntroductiontoCybersecurity.jpg" alt="Cisco" weight="500" height="300"></img>
      <h2>AWSome Day Online Conference Certificate. - 2019</h2>
      <img src="https://s3.paov6.network/certs/aws-omeday-cert.jpg" alt="AWS" weight="500" height="300"></img>
      <h2>Juniper Next Gen 2018.</h2>
      <img src="https://s3.paov6.network/certs/juniper-nextgen-2018.jpg" alt="Juniper" weight="500" height="300"></img>
      <h2>AWS Summit Online Conference Certificate. - 2020</h2>
      <img src="https://s3.paov6.network/certs/aws-omeday-2020.png" alt="AWS" weight="510" height="300"></img>
      <h2>Cisco Meraki Lab Training Certificate.</h2>
      <img src="https://s3.paov6.network/certs/cisco-meraki-lab-training.jpg" alt="Cisco" weight="500" height="300"></img>
      <br />
      <footer>
      <h3>Payungsak Klinchampa (PaO) <br />
          Network/Cloud Engineer / Blogger / DevOps <br />
          Founder @ PaOCLOUD ACADEMY <br />
          pao[at]paocloud.in.th, +66-937738265 <br />
      </h3>
      <div className="App-social-icon">
        <SocialIcon className="App-social-icon-i" style={{ height: 25, width: 25 }} url="http://facebook.com/paov6" fgColor="#f0f0f0"/>
        <SocialIcon className="App-social-icon-i" style={{ height: 25, width: 25 }} url="https://twitter.com/payungsakpk" fgColor="#f0f0f0"/>
        <SocialIcon className="App-social-icon-i" style={{ height: 25, width: 25 }} url="https://www.linkedin.com/in/paov6/" fgColor="#f0f0f0"/>
        <SocialIcon className="App-social-icon-i" style={{ height: 25, width: 25 }} url="https://medium.com/payungsakpk" bgColor="#f0f0f0"/>
        <SocialIcon className="App-social-icon-i" style={{ height: 25, width: 25 }} url="https://github.com/PayungsakCNR" fgColor="#f0f0f0"/>
        <SocialIcon className="App-social-icon-i" style={{ height: 25, width: 25 }} url="mailto:pao@payungsakpk.xyz" network="email" fgColor="#f0f0f0"/>
      </div>
      </footer>
      </header>
    </div>
  );
}

export default App;
