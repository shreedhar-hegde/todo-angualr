import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { SigninComponent } from './auth/signin/signin.component';
import { ListTodoComponent } from './todo/list-todo/list-todo.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  {
    path: 'task-tracker',
    canActivate: [AuthGuardService],
    component: ListTodoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
