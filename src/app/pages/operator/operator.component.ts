import { Component, OnInit } from '@angular/core';
import { Operator } from '../../models/operator';
import { HttpService } from '../../services/http.service';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CacheService } from '../../services/cache.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  loaded: boolean;
  operators: Operator[];

  constructor(private http: HttpService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.http.getOperators().subscribe((response: HttpResponse<Operator[]>) => {
      this.loaded = true;
      this.operators = response.body;
    }, ((response: HttpErrorResponse) => {
      this.snackBar.open(`Error loading operators: ${ response.error.error }`);
    }));
  }

  onClick(operator: Operator) {
    localStorage.setItem('operator', operator.id);
    CacheService.operator = operator;
    this.router.navigateByUrl(CacheService.redirect);
  }
}
