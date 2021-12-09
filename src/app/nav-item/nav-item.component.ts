import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css'],
})
export class NavItemComponent implements OnInit {
  @Input() item;
  @Output() eventEmitter = new EventEmitter();

  constructor() {}

  addTitle(itemNav: string) {
    this.eventEmitter.emit(`L'item ${itemNav} a été cliqué`);
  }

  ngOnInit() {}
}
