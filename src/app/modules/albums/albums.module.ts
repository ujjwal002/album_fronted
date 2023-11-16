import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlbumsRoutingModule } from './albums-routing.module';
import { EditAlbumsComponent } from './components/edit-albums/edit-albums.component';
import { AddAlbumsComponent } from './components/add-albums/add-albums.component';


@NgModule({
  declarations: [
    AddAlbumsComponent,
    EditAlbumsComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AlbumsModule { }
