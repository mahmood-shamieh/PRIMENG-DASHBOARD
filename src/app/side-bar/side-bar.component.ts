import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor(public sidebarService : SidebarService) {}
  close(){
    this.sidebarService.close();
  }
  ngOnInit(): void {}
}
