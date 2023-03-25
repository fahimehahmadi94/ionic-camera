import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { CameraComponent } from './camera/camera.component';

@NgModule({
  declarations: [
    CameraComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  exports: [
    CommonModule,
    IonicModule,
    CameraComponent
  ]
})
export class SharedModule { }
