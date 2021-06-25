
import classes from './Modal.module.css';
import React from 'react';
import MyButton from './Button';
import Card from './Card';

const Modal = (props) => {

    return (
        <div onClick={props.onConfirme} className={classes.backdrop}>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer>
                    <MyButton className={classes.Action} onClick={props.onConfirme} >
                        OKey
                    </MyButton>

                </footer>
            </Card>
        </div>
    );
}

export default Modal;
