import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/itemActions';
import ItemForm from './ItemForm';
import toastr from 'toastr';

class ManageToDoPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      toDoItem: Object.assign({}, props.toDoItem),
      errors: {},
      saving: false
    };

    this.updateItemState = this.updateItemState.bind(this);
    this.saveItem = this.saveItem.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.toDoItem.id != nextProps.toDoItem.id) {
      this.setState({toDoItem: Object.assign({}, nextProps.toDoItem)});
    }
  }

  updateItemState(event) {
    const field = event.target.name;
    let toDoItem = this.state.toDoItem;
    toDoItem[field] = event.target.value;
    return this.setState({toDoItem: toDoItem});
  }

  saveItem(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveItem(this.state.toDoItem)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });

  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Saved');
    this.context.router.push('/items');
  }

  render() {
    return (
      <ItemForm
        allAuthors={this.props.authors}
        onChange={this.updateItemState}
        onSave={this.saveItem}
        toDoItem={this.state.toDoItem}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageToDoPage.propTypes = {
  toDoItem: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageToDoPage.contextTypes = {
  router: PropTypes.object
};


function getItemById(items, id) {
  const item = items.filter(item => item.id == id);
  if (item.length) return item[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  let toDoItem = {id: '', title: '', authorId: '', category: ''};
  const itemId = ownProps.params.id;
  if (itemId && state.items.length > 0) {
    toDoItem = getItemById(state.items, itemId);
  }
  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
  return {
    toDoItem: toDoItem,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageToDoPage);
