import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DragComponent } from './drag/drag.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ConsumoApiComponent } from './consumo-api/consumo-api.component';
import { FormsDragDropComponent } from './drag-drop/forms-drag-drop.component';
import { FormDragComponent } from './form-drag/form-drag.component';
import { SharedModule } from './shared/shared.module';
import { NewFormdragComponent } from './new-formdrag/new-formdrag.component';


@NgModule({
  declarations: [
    AppComponent,
    DragComponent,
    ConsumoApiComponent,
    FormsDragDropComponent,
    FormDragComponent,
    NewFormdragComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
