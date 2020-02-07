import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent implements OnInit {

  fontSize = 16;

  onFontSizeChange(value) {
    this.fontSize = Number(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
