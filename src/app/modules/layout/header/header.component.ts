import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo = './assets/images/logo.png';
  images_eng = './assets/images/eng.png';
  images_thai = './assets/images/thai.png';

  constructor() { }

  ngOnInit(): void {
  }

}
