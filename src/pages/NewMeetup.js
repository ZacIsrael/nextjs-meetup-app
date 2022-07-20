import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

function NewMeetUpsPage()
{

    // allows us to manipulate the browser's history
    const history = useNavigate();
    // const history = useHistory(); // this is the react-5 version 

    function addMeetupHandler(meetupData){
        // send data to firebase server, database. must add ".json" at the end of the url
        // sends a post requets to my firebase API with the meetupData parameter as the data passed 
        fetch('https://meetup-react-app-9e6d6-default-rtdb.firebaseio.com/meetups.json', 
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            // On success of the promise returned by fetch()
            history('/');

        });



    }
    return (
    <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
    );
}

export default NewMeetUpsPage;