import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterModule } from './components/footer/footer.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from './lib/accordion/accordion.module';
import { ReestruturacaoComponent } from './pages/reestruturacao/reestruturacao.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ComunidadeService } from './shared/services/comunidade.service';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { ProductService } from './pages/carousel/productservice';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CustomCarouselComponent } from './pages/carousel/custom-carousel/custom-carousel.component';
import { CargaComponent } from './pages/carga/carga.component';
import { ConfigComponent } from './pages/config/config.component';
import { CustomSelectComponent } from './pages/config/custom-select/custom-select.component';
import { SearchCardComponent } from './pages/config/search-card/search-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ReestruturacaoComponent,
    CarouselComponent,
    CustomCarouselComponent,
    CargaComponent,
    ConfigComponent,
    CustomSelectComponent,
    SearchCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FooterModule,
    AccordionModule,
    RouterModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    ButtonModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatIconModule,
  ],
  providers: [ComunidadeService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
