import { Component, OnInit } from '@angular/core';
import { Operator } from '../../models/operator';
import { HttpService } from '../../services/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CacheService } from '../../services/cache.service';
import { MatDialog } from '@angular/material/dialog';
import { NewOperatorDialogComponent } from '../../dialogs/new-operator-dialog/new-operator-dialog.component';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  loaded: boolean;
  operators: Operator[];

  constructor(private http: HttpService, private snackBar: MatSnackBar, private router: Router, private dialog: MatDialog) { }

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

  onCreate() {
    const dialogRef = this.dialog.open(NewOperatorDialogComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name === undefined) {
        return;
      }

      this.http.insertOperator(name).subscribe((response: HttpResponse<Operator>) => {
        this.operators.push(response.body);
        this.snackBar.open(`Created operator ${ name }`);
      });
    });
  }
}
