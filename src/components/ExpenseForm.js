import React from 'react';

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: ''
    };
    // CHALLENGE 105
    // setup note state 
    // setup onChange and value for textarea

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState( () => ({ note }));
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState( () => ({ description }));
    };
    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="number"
                        placeholder="Amount"
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}