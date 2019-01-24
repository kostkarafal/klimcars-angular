import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  lat = 50.176297;
  lng = 18.788917;
  imageSources: string[] = [];
  constructor() {
    this.imageSources.push('assets/img/air-conditioning.jpg');
  }

  ngOnInit() {
  }

}
