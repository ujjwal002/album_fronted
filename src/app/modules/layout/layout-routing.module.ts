import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { UserImageComponent } from './user-image/user-image.component';
import { DiplayComponent } from './diplay/diplay.component';
import { PermissionComponent } from './permission/permission.component';
import { SharedAlbumComponent } from './shared-album/shared-album.component';
import { ImagesComponent } from './images/images.component';
import { SharedImageComponent } from './shared-image/shared-image.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'setting/:id',
        component: SettingComponent,
      },
      {
        path: 'imageSetting/:id',
        component: UserImageComponent,
      },
      {
        path: 'displayImage/:id',
        component: DiplayComponent,
      },
      {
        path: 'image/:id',
        component: ImagesComponent,
      },
      {
        path: 'permisson',
        component: PermissionComponent,
      },
      {
        path: 'shared/:id',
        component: SharedAlbumComponent,
      },
      {
        path: 'sharedImage/:id',
        component: SharedImageComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
