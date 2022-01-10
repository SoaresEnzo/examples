import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterModule } from './components/footer/footer.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from './lib/accordion/accordion.module';
import { ReestruturacaoComponent } from './pages/reestruturacao/reestruturacao.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ComunidadeService } from './shared/services/comunidade.service';

@NgModule({
  declarations: [AppComponent, ReestruturacaoComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FooterModule,
    AccordionModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [ComunidadeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
