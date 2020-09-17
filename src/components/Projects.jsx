import React, {Component} from 'react';
import Project from '../models/Project';
import { ProjectService } from '../services/ProjectService';
import ProjectTreeInt from '../models/project-tree-int';
import TransformProjectsTree from  '../models/transform.projects.tree';
import  BootstrapTreeTable  from 'bootstrap-react-treetable';
import { Container } from '@material-ui/core';
import GlobalApp from '../services/GlobalApp';
import MainNav from './MainNav';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            treeValue: [],
            status: false
          };
        
      }
    getData(){

        var tmpProjectsArray = new Array(Project);
        var tmpProjectsTree = new Array(ProjectTreeInt)
        ProjectService.getProjects(null).
        then(resP=>{
            if(!(resP==undefined)){
                tmpProjectsArray = resP.projects;
                var tree = new TransformProjectsTree();
                
                tmpProjectsTree = tree.generateTree(tmpProjectsArray);
                this.setState(
                    {
                        treeValue: tmpProjectsTree,
                        status: true
                    }
                );
            }
            
            
            
   
        });
        
        
    }
    componentWillMount(){
        this.getData();
    }
    render(){

        let dateRenderer = function (dataRow, dataField) {

            var date = new Date(dataRow.data.check_date[dataField]);
           
            return <span>{date.toDateString().slice(3,15)}</span>
        };
        let statusRenderer = function (dataRow, dataField) {

            var stat = dataRow.data[dataField];
            var statusDesc = '';
            GlobalApp.status.map(statusStruc=>{
                if(statusStruc.id == stat){
                    statusDesc = statusStruc.name;
                }
            })
            return <span>{statusDesc}</span>
        };
        //this.getData();
        const { treeValue } = this.state;
        
        const controlWithButton = {
            "visibleRows": 2,
            "allowSorting": true,
            "showExpandCollapseButton": true,
            "showPagination": true,
            "initialRowsPerPage": 3,
            "allowFiltering": true,
            "filterInputPlaceholderText": 'Filter options',
            "showPagination": true
        };
        const fixedColumns = 
        [
            {
              "dataField": "name",
              "heading": "Name",
              "fixedWidth": false,
              "percentageWidth": 40
            },
            {
              "dataField": "level",
              "heading": "Level",
              "fixedWidth": false,
              "percentageWidth": 20,
              "sortable": false,
            },
            {
                "dataField": "begin_date",
                "heading": "Begin Date",
                "fixedWidth": false,
                "percentageWidth": 20,
                "renderer": dateRenderer,
                "sortable": false,
                "sortUsingRenderer": true,
                
            }, 
            {
                "dataField": "end_date",
                "heading": "End Date",
                "fixedWidth": false,
                "percentageWidth": 20,
                "renderer": dateRenderer,
                "sortable": false,
                "sortUsingRenderer": true,
            }, 
            {
                "dataField": "status",
                "heading": "Status",
                "fixedWidth": false,
                "percentageWidth": 20,
                "renderer": statusRenderer
            }, 
        ];
        
        const divStyle = {
            color: 'blue'
        };

        return (
            <React.Fragment>
                <MainNav></MainNav>
                <h1>Projects</h1>
                { this.state.status ===true &&
                <Container>
                    <BootstrapTreeTable className="table table-bordered"
                    columns={fixedColumns} 
                    tableData={treeValue} 
                    control={controlWithButton}
                    style={divStyle}
                    >

                    </BootstrapTreeTable>
                    </Container>
                }

            </React.Fragment>
        )
    }
}

export default Projects;