import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

function MeetUpItem(props) {

    // gives us access to the "context" object inside of favorites-context.js
    const favoritesCtx = useContext(FavoritesContext);

    // checks if this meetup item has already favorited
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    // executed when the "To favorite" button has been clicked 
    function toggleFavoritesStatusHandler(){

        if(itemIsFavorite){
            // if the item has already been favorited, remove it 
            favoritesCtx.removeFavorite(props.id);
        } else{
            // otherwise, add it to the favorites list
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                description: props.description,
                address: props.address
            });
        }
    }
    return (
    <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite ? 'Remove from Favorites': 'Add to Favorites'}</button>
        </div>
        </Card>
    </li>
    );
}

export default MeetUpItem;