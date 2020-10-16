export interface IPictureModel {
    Image: string | ArrayBuffer;
    Name: string;
    Description: string;
    Tag: string;
}

export class PictureModel implements IPictureModel {
    Image: string | ArrayBuffer;
    Name: string;
    Description: string;
    Tag: string;
}