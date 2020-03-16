import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CacheService } from './services/cache.service';
import { HttpService } from './services/http.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Operator } from './models/operator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private http: HttpService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    const operatorID = localStorage.getItem('operator');

    if (window.location.pathname !== '/operator' && operatorID === null) {
      CacheService.redirect = window.location.pathname + window.location.search;
      this.router.navigateByUrl('/operator');
      return;
    }

    if (operatorID !== null) {
      this.http.getOperator(operatorID).subscribe((response: HttpResponse<Operator>) => {
        CacheService.operator = response.body;
      }, (response: HttpErrorResponse) => {
        localStorage.removeItem('operator');

        if (response.status === 404) {
          this.snackBar.open('Previous operator was deleted');
        } else {
          this.snackBar.open(`Error loading operator: ${ response.error.error }`);
        }

        CacheService.redirect = window.location.pathname + window.location.search;
        this.router.navigateByUrl('/operator');
      });
    }
  }

  get operator() {
    return CacheService.operator;
  }

  logOut() {
    localStorage.removeItem('operator');
    CacheService.operator = null;
    CacheService.redirect = window.location.pathname + window.location.search;
    this.router.navigateByUrl('/operator');
  }
}
