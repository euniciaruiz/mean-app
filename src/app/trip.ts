import { Destination } from './destination';

export class Trip {
        travelDate: Date;
        amount: number;
        location: string;

        constructor() {
                this.travelDate = null;
                this.amount = 0;
                this.location = null;
        }        
}
