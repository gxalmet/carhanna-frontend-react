import { Model } from 'react-axiom';

export default class Team extends Model {
    static defaultState() {
        return {
            _id: String,
            user_id: String,
            collegues: [{
                _id: Object,
                email: String,
                person: {
                    firstname: String,
                    lastname: String
                },
                user_id_col: String,
            }]
        };
    }
}