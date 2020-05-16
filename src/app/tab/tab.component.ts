import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  //Bounded variables.
  @Input() text: string;

  //Unbounded variables.
  tabWidth: number;

  constructor() { 
  }

  ngOnInit(): void {
    // This statement assigns a width of 28 units if tab text is empty, and 12 units otherwise. 
    this.tabWidth = !this.text ? 28: 12;
  }

}
