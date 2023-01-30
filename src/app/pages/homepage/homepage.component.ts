import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  adultLinkImg: string;
  youthLinkImg: string;
  residencesLinkImg: string;
  adultLinkTitle: string;
  youthLinkTitle: string;
  residencesLinkTitle: string;

  constructor() { 
    this.adultLinkImg = '../../../assets/images/adult-page-header.jpeg';
    this.youthLinkImg = '../../../assets/images/child_link_img.jpeg';
    this.residencesLinkImg = '../../../assets/images/vacancy-1.jpeg';
    this.adultLinkTitle = "Adult Program";
    this.youthLinkTitle = "Youth Program";
    this.residencesLinkTitle = "Residential Care Units";
  }

  ngOnInit(): void {
  }

}
