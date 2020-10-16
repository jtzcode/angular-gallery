import { Injectable } from '@angular/core';
import { IPictureModel, PictureModel } from '../types';

@Injectable({
  providedIn: 'root'
})
export class FilePreviewServiceService {

  constructor() { }

  public async Preview (files: any): Promise<IPictureModel> {
    return new Promise<IPictureModel>((resolve, reject) => {
      if (files.length === 0) {
        return;
      }
      const file = files[0];
      if (file.type.match(/image\/*/) === null) {
        reject('Not an image file.');
        return;
      }
      const imageModel: IPictureModel = new PictureModel();
      const reader = new FileReader();
      reader.onload = (e) => {
        imageModel.Image = reader.result;
        resolve(imageModel);
      };
      reader.readAsDataURL(file);
    });
  }
}
