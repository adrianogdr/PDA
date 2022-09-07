import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  url:string = 'assets/img/logopbhdadosabertos.png';
  title = 'pda-hm';
  constructor(){
  }
  ngOnInit(): void {

  }
}

/* git remote add origin https://github.com/adrianogdr/PDA.git
git branch -M main
git push -u origin main
  */
