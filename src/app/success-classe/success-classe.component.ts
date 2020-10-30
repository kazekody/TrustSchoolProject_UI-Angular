import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Variables} from '../Variables';

@Component({
  selector: 'app-success-classe',
  templateUrl: './success-classe.component.html',
  styleUrls: ['./success-classe.component.scss']
})
export class SuccessClasseComponent implements OnInit {
      url: string ;
  constructor(private router: Router, private http: HttpClient, private variable: Variables) { }

  ngOnInit() {
  }
    retour() {
        this.url = this.variable.url2;
        this.http.get(this.url).subscribe(
            (response) => {
              console.log('success !');
            },
            (error) => {
              console.log('error', error);
           },
           () => {
             console.log('Success !');
           }
        );
        }
    }
