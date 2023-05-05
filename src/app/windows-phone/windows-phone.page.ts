import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-windows-phone',
  templateUrl: './windows-phone.page.html',
  styleUrls: ['./windows-phone.page.scss'],
})
export class WindowsPhonePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //used for data binding
phone:string ="Windows Phone";
}
