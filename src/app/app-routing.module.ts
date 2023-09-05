import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./list/list.module').then((m) => m.ListPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./employee/employee-details/employee-details.module').then(
        (m) => m.EmployeeDetailsPageModule
      ),
  },
  {
    path: 'AddEmployee',
    loadChildren: () =>
      import('./employee/add-employee/add-employee.module').then(
        (m) => m.AddEmployeePageModule
      ),
  },
  {
    path: 'add-employee',
    loadChildren: () =>
      import('./employee/add-employee/add-employee.module').then(
        (m) => m.AddEmployeePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
