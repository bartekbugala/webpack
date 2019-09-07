import React from 'react';
import style from '../sass/style.scss';

const Info = props =><div className={style.info}>
    <div>{props.cookieInfo}</div>
</div>

export default Info;