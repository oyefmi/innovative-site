import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  adultLinkImg: string;
  youthLinkImg: string;
  cdsLinkImg: string;
  adultLinkTitle: string;
  youthLinkTitle: string;
  cdsLinkTitle: string;

  constructor() { 
    this.adultLinkImg = '../../../assets/images/adult-page-header.jpeg';
    this.youthLinkImg = '../../../assets/images/child_link_img.jpeg';
    this.cdsLinkImg = '../../../assets/images/accessability.jpeg';
    this.adultLinkTitle = "Adult Program";
    this.youthLinkTitle = "Youth Program";
    this.cdsLinkTitle = "Community Development Services";
  }

  ngOnInit(): void {
  }

}
