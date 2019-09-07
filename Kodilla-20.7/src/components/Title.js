import React from 'react';
import style from '../sass/style.scss';

const Title = props =><div className={style.title}>
    <h1>{props.title}</h1>
    <h2>Task amount: {props.taskAmount}</h2>
</div>

export default Title;