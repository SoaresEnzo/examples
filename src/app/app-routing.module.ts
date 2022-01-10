import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReestruturacaoComponent } from './pages/reestruturacao/reestruturacao.component';

const routes: Routes = [
  { path: 'reestruturacao', component: ReestruturacaoComponent },
  { path: '', redirectTo: 'reestruturacao', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
