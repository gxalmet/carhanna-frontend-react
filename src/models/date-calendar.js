import { Model } from 'react-axiom';

export default class DateCalendar extends Model {
    static defaultState() {
        return {
            id: String,
            name: String,
            level: Number,
            colspan: Number
        };
    }
}