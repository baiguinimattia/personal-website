import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  linkedIn = "https://www.linkedin.com/in/mattia-baiguini-788002140/"
  github = "https://github.com/baiguinimattia"
  constructor() { }

  ngOnInit() {
  }

}
