import mongoose, { Schema } from 'mongoose';

export const PictureSchema = new Schema({
    Image: String,
    Name: String,
    Description: String,
    Tags: String
});

export const Picture = mongoose.model('picture', PictureSchema);

export class Mongo{
    constructor(private url: string = "mongodb://localhost:27017/ng-gallery") {}

    public Connect(): void {
        mongoose.connect(this.url, (e: any) => {
            if (e) {
                console.log('Unable to connect');
            } else {
                console.log('Connected to database successfully');
            }
        })
    }
}