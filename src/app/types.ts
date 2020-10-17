export interface IPictureModel {
    Image: string | ArrayBuffer;
    Name: string;
    Description: string;
    Tags: string;
}

export class PictureModel implements IPictureModel {
    Image: string | ArrayBuffer;
    Name: string;
    Description: string;
    Tags: string;
}