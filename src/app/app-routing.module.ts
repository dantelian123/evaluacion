import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { PermissionsGuard } from './guards/permissions.guard';
import { ContentComponentInvited } from './components/content-invited/content.component';

const routes: Routes = [
  { path: '', component: ContentComponentInvited },
  { path: 'index', component: ContentComponent, canActivate: [PermissionsGuard] },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
