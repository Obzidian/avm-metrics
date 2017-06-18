import { Component } from '@angular/core';
import { Metricdata } from './metrics-data';

@Component({
  moduleId: module.id,
  selector: 'newdata',
  templateUrl: 'newdata.component.html'
})
export class NewdataComponent {
  pageTitle: string = "Asset Dashboard"
  
  newdata: Metricdata[] = [
    {
      asset_id: 52252,
      host_name: "TEST-LAPTOP67801",
      IP: "192.168.1.149",
      OS: "Microsoft Windows 7 Professional Edition SP1",
      critical_vul: 173,
      severe_vul: 451,
      risk_score: 285080,
      last_discovered: '06/10/2017'
    },
    {
      asset_id: 9487,
      host_name: "TEST-PC63285",
      IP: "192.168.1.115",
      OS: "Microsoft Windows 7 Professional Edition SP1",
      critical_vul: 875,
      severe_vul: 616,
      risk_score: 86449,
      last_discovered: '06/06/2017'
    },
    {
      asset_id: 1925,
      host_name: "TEST-TABLET63327",
      IP: "192.168.1.64",
      OS: "Microsoft Windows 7 Professional Edition SP1",
      critical_vul: 70,
      severe_vul: 311,
      risk_score: 129091,
      last_discovered: '06/09/2017'
    }
  ]
}
