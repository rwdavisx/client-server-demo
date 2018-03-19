import React from 'react';
import {connect} from 'react-redux';

const AddGame = ({dispatch}) => {
    let form = props.form;
    const onChanged = props.onChanged;
    const onSubmit = props.onSubmit;
    const submissionErrorMessage = form.submissionError ? (<p>You must fill the info out first!</p>) : ('');

    return (
        <div className={'container'}>
            <form className={'text-left'} onSubmit={onSubmit}>
                <label>
                    Name:
                    <input name='name' type="text" value={form.name} onChange={onChanged}/>
                </label>
                <label>
                    Rating:
                    <input name='rating' type="number" min="1" max="5" value={form.rating} onChange={onChanged}/>
                </label><br/>
                <label>
                    Genre:
                    <select name='genre' value={form.genre} onChange={onChanged}>
                        <option value='' disabled hidden>Choose genre</option>
                        <option value="fps">FPS</option>
                        <option value="rts">RTS</option>
                    </select>
                </label><br/>
                <label>
                    Image:
                    <input name='image' type="file"/>
                </label><br/>
                <input type="submit" value="Submit"/>
                {submissionErrorMessage}
            </form>
        </div>
    );
};

export default connect()(AddGame);