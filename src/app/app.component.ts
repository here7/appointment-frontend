import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appointment-frontend';
  ngOnInit(): void {
    $(document).ready(() => {
      $('#elementId').css({'background-color': 'yellow', 'font-size': '200%'});
    });
  }
  
}
