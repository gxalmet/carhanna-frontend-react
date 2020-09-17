import axios from 'axios';
import GlobalApp from './GlobalApp';


function buildHeader() {
    var token = localStorage.getItem('access_token');

    let headers = {};
    if (token) {
        headers = {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Authorization': 'Bearer ' + token
        };
    } else {
        headers = {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*'
        };
    }
    return headers;
}

export const ProjectService = {

    createProject: async(project) => {
        let params = JSON.stringify(project);

        let headers = buildHeader();

        var res = axios.post(GlobalApp.URLproject + '/createproject', params, { headers: headers })
            .then(resp => {
                return resp.data;
            })
            .catch(errorResp => {
                return errorResp.data;
            });
        return res;


    },
    getProjects: async(projectParent) => {
        let paramsParent = JSON.stringify(projectParent);

        let headers = buildHeader();

        let params = { projectParent: paramsParent };

        const res = await axios.get(GlobalApp.URLproject + '/getprojects', { headers: headers, params: params })
            .then(resp => {

                return resp.data;
            })
            .catch(errorResp => {

                return errorResp.data;
            });

        return res;
    },
    getProjectsTree: async(projectParent) => {
        let paramsParent = JSON.stringify(projectParent);

        let headers = buildHeader();

        let params = paramsParent;

        var res = await axios.get(GlobalApp.URLproject + '/getprojectstree', { headers: headers, params: params })
            .then(resp => {
                return resp.data;
            })
            .catch(errorResp => {
                return errorResp.data;
            });
        return res;;
    },
    getProject: async(id) => {

        let headers = buildHeader();


        var res = axios.get(GlobalApp.URLproject + '/getproject/' + id, { headers: headers })
            .then(resp => {
                return resp.data;
            })
            .catch(errorResp => {
                return errorResp.data;
            });
        return res;
    },

    updateProject: async(Project) => {
        let params = JSON.stringify(Project);

        let headers = buildHeader();


        var res = axios.put(GlobalApp.URLproject + '/updateproject/' + Project._id, params, { headers: headers })
            .then(resp => {
                return resp.data;
            })
            .catch(errorResp => {
                return errorResp.data;
            });
        return res;
    },
    deleteProject: async(projectId) => {
        // let params = JSON.stringify(Project);

        let headers = buildHeader();

        var res = axios.delete(GlobalApp.URLproject + '/deleteproject/' + projectId, { headers: headers })
            .then(resp => {
                return resp.data;
            })
            .catch(errorResp => {
                return errorResp.data;
            });
        return res;
    }
}