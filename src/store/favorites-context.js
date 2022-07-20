import { createContext, useState } from 'react';

// The first letter in component names is always uppercase
// arg: initial value for the context (application or component wide state)
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props){

    // an array of favorited meetups
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        })
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites(prevUserFavorites => {
            // filter returns a new array when we can filter out items based on a condition 
            // return true if the meetup's id is not euqal to the meetupId passed as a parameter, other wise,
            // the meetup needs to be removed so it will not be passed to the output array 
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
        })
    }

    function itemIsFavoriteHandler(meetupId){
        // check whether an item with a given id is with our favorites 
        // some wants a function nas an argument that should return true or false 
        return userFavorites.some(meetup => meetup.id === meetupId)
    }

    const context = {

        favorites: userFavorites,
        totalFavoorites: userFavorites.length,
        // points to the functions so they can be used/exposed to othercomponents that need them 
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler

    };

    return <FavoritesContext.Provider value={context} >

        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;