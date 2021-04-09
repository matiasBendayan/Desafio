import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NewPostComponentComponent} from './new-post-component/new-post-component.component';
import {MainComponentComponent} from './main-component/main-component.component';

const routes: Routes = [
  { path: '', component: MainComponentComponent },
  { path: 'new-post', component: NewPostComponentComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
    CommonModule
  ]
})


export class AppRoutingModule {}
