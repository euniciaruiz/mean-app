import { Destination } from './destination';

export class Trip {
        id: number;
        travelDate: Date;
        amount: number;
        location: Destination = new Destination();

        constructor() {
                this.id = null;
                this.travelDate = null;
                this.amount = 0;
                this.location = null;
        }        
}
