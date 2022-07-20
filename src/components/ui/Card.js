import classes from './Card.module.css';

function Card(props){


    return <div className={classes.card}>
        {/* children parameter always holds the content that is passed between the opening and closing Card tag */}
        {props.children}

    </div>
}

export default Card;