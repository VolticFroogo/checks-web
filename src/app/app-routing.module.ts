import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './pages/root/root.component';
import { OperatorComponent } from './pages/operator/operator.component';

const routes: Routes = [
  { path: '', component: RootComponent },
  { path: 'operator', component: OperatorComponent, data: { location: '' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
