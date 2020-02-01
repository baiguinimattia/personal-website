import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  liveLink = "https://morning-meadow-06942.herokuapp.com/"
  gitCode = "https://github.com/baiguinimattia/TVSeriesWebApp"
  constructor() { }

  ngOnInit() {
  }

}
