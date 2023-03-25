import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})

export class CameraComponent implements OnInit {
  @Output() imagePick = new EventEmitter<string>();
  selectedImage: string = '';
  constructor() { }

  ngOnInit() { }

  onPickImage() {
    if (!Capacitor.isPluginAvailable('Camera')) {
      return;
    }
    Camera.getPhoto({
      quality: 50,
      source: CameraSource.Prompt,
      correctOrientation: true,
      height: 320,
      width: 200,
      resultType: CameraResultType.Base64
    }).then(image => {
      this.selectedImage = image.base64String ?? '';
      this.imagePick.emit(image.base64String);

    }).catch(err => {
      console.log(err);
      return false;

    });
  }
}
