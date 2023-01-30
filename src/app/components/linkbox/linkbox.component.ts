import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkbox',
  templateUrl: './linkbox.component.html',
  styleUrls: ['./linkbox.component.css']
})
export class LinkboxComponent implements OnInit {

  @Input() imgUrl!: string;
  @Input() linkTitle!: string;  
 

  

  constructor() { }

  ngOnInit(): void {
  }

}
