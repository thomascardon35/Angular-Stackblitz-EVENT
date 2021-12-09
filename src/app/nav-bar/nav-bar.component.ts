import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  message = 'none';

  addItem(mess: string) {
    this.message = mess;
  }

  listLinks = [
    {
      title: 'Home',
      link: '/',
      count: 0,
    },
    {
      title: 'Pricing',
      link: '/price',
      count: 0,
    },
    {
      title: 'Showcase',
      link: '/show',
      count: 0,
    },
    {
      title: 'About',
      link: '/about',
      count: 0,
    },
  ];

  showClickedItem = 'none';

  constructor() {}

  ngOnInit() {}
}
