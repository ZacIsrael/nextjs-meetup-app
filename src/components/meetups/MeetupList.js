import MeetUpItem from './MeetupItem';
import classes from './MeetupList.module.css';


function MeetupList(props) {

    return <ul className={classes.list}>
        {/* map every meetup item to a jsx MeetUpItem */}
        {props.meetups.map(meetup => <MeetUpItem key={meetup.id} id={meetup.id} 
        image={meetup.image} title={meetup.title} address={meetup.address} 
        description={meetup.description}/>)}
    </ul>

}

export default MeetupList;