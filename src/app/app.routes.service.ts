import { ConsclienteComponent } from './cliente/conscliente/conscliente.component';
import { ModalsComponent } from './views/modals/modals.component';
import { TableComponent } from './views/tables/table.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { DashboardComponent } from './views/dashboards/dashboard/dashboard.component';
import {LoginComponent} from './views/login/login.component';
import { CadclienteComponent } from './cliente/cadcliente/cadcliente.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: DashboardComponent },
  { path: 'table', component: TableComponent },
  { path: 'modals', component: ModalsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'conscliente', component: ConsclienteComponent},
  { path: 'cadcliente', component: CadclienteComponent},
  { path: '**', component: NotFoundComponent },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
