import { Model } from 'react-axiom';
import Project from './Project';


export default class ProjectTreeInt extends Model {
    static defaultState() {
        return {
            data: new Project(),
            children: new Array(ProjectTreeInt())
        };
    }
}