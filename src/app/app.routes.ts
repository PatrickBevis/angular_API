import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';
import { Recipes } from './pages/recipes/recipes';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'services', component: Services },
  { path: 'about', component: About },
  {path: 'recipes', component: Recipes },
  { path: 'contact', component: Contact },
  { path: '**', component: NotFound },
];
