import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {MainComponent} from './main/main.component';
import {GalleryComponent} from './gallery/gallery.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutComponent
  },
  {   path: 'contact',
      component: ContactComponent
    },
  {path: 'gallery',
    component: GalleryComponent}
  // {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'}},
  // /*always in the end=>*/
  // {path: '**', redirectTo: '/not-found'}
  // { path: 'books/:name',
  //   component: BooksComponent}
];

@NgModule({
  imports:[ 
    RouterModule.forRoot(appRoutes)],
  exports:[ 
    RouterModule
  ]
})
export class AppRoutingModule{

}
