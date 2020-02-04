import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  liveLink = "https://matmal-tv.herokuapp.com/";
  gitCode = "https://github.com/baiguinimattia/TVSeriesWebApp";
  resume = "https://drive.google.com/open?id=1ALlgSlSsYB9CDdBtnmEq_TBuTtbBRzY9";
  constructor() { }

  ngOnInit() {
  }

}
