import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {MainComponentComponent} from './main-component/main-component.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ModalComentariosComponent} from './modal-comentarios/modal-comentarios.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';
import {Router, RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import { MostrarPostComponent } from './mostrar-post/mostrar-post.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    ModalComentariosComponent,
    NewPostComponentComponent,
    MostrarPostComponent
  ],
  imports: [
    MatCardModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatFormFieldModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [MatDialog,
  RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
