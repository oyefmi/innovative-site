import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  adultProgramImg: string;
  childProgramImg: string;
  residences: string;

  constructor() { 
    this.adultProgramImg = '../../../assets/images/adult-page-header.jpeg';
    this.childProgramImg = '../../../assets/images/child_link_img.jpeg';
    this.residences = '../../../assets/images/vacancy-1.jpeg';
  }

  ngOnInit(): void {
  }

}
