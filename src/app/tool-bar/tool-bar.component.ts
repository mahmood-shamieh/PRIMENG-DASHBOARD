import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  constructor(private sidebarService : SidebarService) { }
  oppenSideBar(){
    this.sidebarService.opened = !this.sidebarService.opened;
    console.log(this.sidebarService.opened);
  }
  ngOnInit(): void {
  }

}
