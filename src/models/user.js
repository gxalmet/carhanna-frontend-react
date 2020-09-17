import { Model } from 'react-axiom';

export default class User extends Model {
    static defaultState() {
        return {
            _id: String,
            person: {
                firstname: String,
                lastname: String
            },
            email: String,
            password: String
        };
    }
}