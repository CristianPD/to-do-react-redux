/**
 * Created by Cristian on 4/17/2017.
 */
import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ItemForm = ({toDoItem, allAuthors, onSave, onChange, saving, errors}) => {
    return (
        <form>
            <h1>Manage Item</h1>
            <TextInput
                name="title"
                label="Title"
                value={toDoItem.title}
                onChange={onChange}
                error={errors.title}/>

            <SelectInput
                name="authorId"
                label="Author"
                value={toDoItem.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange} error={errors.authorId}/>

            <TextInput
                name="category"
                label="Category"
                value={toDoItem.category}
                onChange={onChange}
                error={errors.category}/>

            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

ItemForm.propTypes = {
    toDoItem: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default ItemForm;