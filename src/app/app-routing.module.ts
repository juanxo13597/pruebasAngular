import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: 'volumenEsfera',
    loadChildren: () =>
      import('./volumen-esfera-module/volumen-esfera-module.module').then(
        (m) => m.VolumenEsferaModuleModule
      ),
  },
  {
    path: 'todoList',
    loadChildren: () =>
      import('./todo-list/todo-list.module').then((m) => m.TodoListModule),
  },
  {
    path: 'cronometro',
    loadChildren: () =>
      import('./cronometro/cronometro.module').then((m) => m.CronometroModule),
  },
  {
    path: 'pac01javi',
    loadChildren: () =>
      import('./pac01javi/pac01javi.module').then((m) => m.PAC01javiModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
