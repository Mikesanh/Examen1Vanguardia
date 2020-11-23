import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatButtonModule} from '@angular/material/button';
import { DetailsComponent } from './details/details.component';
import { AlbumService } from './Core/AlbumService';
import {MatSelectModule} from '@angular/material/select';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailsComponent,
    ProfileComponent
  ],
  imports: [
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
