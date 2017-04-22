/**
 * Created by Cristian on 4/16/2017.
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as toDoActions from '../../actions/itemActions';
import {bindActionCreators} from 'redux';
import ToDoList from './ToDoList';
import {browserHistory} from 'react-router';

class ToDoPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todoItem: {title: ""}
        };
        this.redirectToAddItemPage = this.redirectToAddItemPage.bind(this);
    }

    redirectToAddItemPage(){
        browserHistory.push('/item');
    }

    render() {
        const {toDoItems} = this.props;
        return (
            <div>
                <h1>Items</h1>
                <input type="submit"
                       value="Add Item"
                       className="btn btn-primary"
                       onClick={this.redirectToAddItemPage}/>
                <ToDoList toDoItems={toDoItems}/>
            </div>
        );
    }
}

ToDoPage.propTypes = {
    toDoItems: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        toDoItems: state.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(toDoActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoPage);
