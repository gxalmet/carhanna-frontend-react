import { Model } from 'react-axiom';

export default class Project extends Model {
    static defaultState() {
        return {
            _id: '',
            parentId: '',
            name: '',
            description: '',
            user_id: '',
            level: 0,
            check_date: {
                begin_date: new Date(),
                end_date: new Date()
            },
            status: '',
            team: [{
                team_user_id: ''
            }]
        };
    };
}