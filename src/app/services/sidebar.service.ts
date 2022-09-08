import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  opened : boolean = false;
  open(){
    this.opened = true;
  }
  close(){
    this.opened = false;;
  }
  constructor() { }
}
