import { BehaviorSubject } from 'rxjs';
import { IPictureModel } from '../types';

export class ContextServiceBase {
    private source = new BehaviorSubject(null);
    context = this.source.asObservable();
    constructor() {}
    public add(image: IPictureModel): void {
        this.source.next(image);
    }
}