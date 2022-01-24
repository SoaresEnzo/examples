import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReestruturacaoComponent } from './pages/reestruturacao/reestruturacao.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { CargaComponent } from './pages/carga/carga.component';
import { ConfigComponent } from './pages/config/config.component';

const routes: Routes = [
  { path: 'reestruturacao', component: ReestruturacaoComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'carga', component: CargaComponent },
  { path: 'config', component: ConfigComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
