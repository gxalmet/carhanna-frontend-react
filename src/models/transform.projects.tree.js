//import Project from './Project';
import ProjectTreeInt from './project-tree-int';

export default class TransformProjectsTree {
    constructor() {

    }


    generateTree(projects) {

        var projectsread = projects.slice(),
            projectsread_help = projects.slice();


        //var item = new ProjectTreeInt();
        var arr = [];
        // primer afegim els projectes origen
        projectsread.forEach(proR1 => {
            if (!proR1.parentId) {

                arr.push({ 'data': proR1, 'children': [] });
                var index = this.findProject(projectsread_help, proR1._id);
                if (index > -1) {
                    projectsread_help.splice(index, 1);
                }
            }
        })

        // Ara afegim el primer nivell
        projectsread.splice(0, projectsread.length);
        projectsread = projectsread_help.slice();

        projectsread.forEach(proR2 => {
            var index = this.findProjectTree(arr, proR2.parentId);

            if (index > -1) {
                arr[index].children.push({ 'data': proR2, 'children': [] });
            }
            var indexDelete = this.findProject(projectsread_help, proR2._id);
            if (index > -1) {
                projectsread_help.splice(indexDelete, 1);
            }
        })

        // Ara afegim el segon nivell

        projectsread.forEach(proR3 => {
            arr.forEach(arr_lv1 => {
                if (arr_lv1.children.length > 0) {
                    var index = this.findProjectTree(arr_lv1.children, proR3.parentId);

                    if (index > -1) {
                        arr_lv1.children[index].children.push({ 'data': proR3, 'children': [] });
                        var indexDelete = this.findProject(projectsread_help, proR3._id);
                        if (index > -1) {
                            projectsread_help.splice(indexDelete, 1);
                        }
                    }
                }
            })
        })
        return arr;
    }
    findProjectTree(data, value) {
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {

                if (data[i].data._id == value) {
                    return i;
                }
            }
            return -1;
        } else {
            return -1;
        }

    }
    findProject(data, value) {
        for (var i = 0; i < data.length; i++) {
            if (data[i]._id == value) {
                return i;
            }
        }
        return -1;
    }
}