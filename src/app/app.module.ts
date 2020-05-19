import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaVooComponent } from './cadastro/lista-voo/lista-voo.component';
import { CadastraAlteraVooComponent } from './cadastro/cadastra-altera-voo/cadastra-altera-voo.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { VoosServices } from './cadastro/voos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaVooComponent,
    CadastraAlteraVooComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    VoosServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
