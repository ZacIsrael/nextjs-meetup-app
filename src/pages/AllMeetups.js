import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';

function AllMeetUpsPage()
{
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // this code only executes when the arguments in second parameter are true 
    // GET request to get the data 

    setIsLoading(true);
    fetch('https://meetup-react-app-9e6d6-default-rtdb.firebaseio.com/meetups.json')
    .then((response) => {
      // response returned from the successful promise from the GET request 
      console.log('response= ', response)
      return response.json();
    }).then((data) => {
      // the data is now a JSON 
        console.log('data= ', data)
      // must create an array because that is what setLoadedMeetups expects as a parameter 
      const meetups = [];

      // for each uniqe id in the firebase database
      for (const key in data){
        console.log('key= ', key)
        // ... , spread operate, copies all of the key-value pairs from the object in firebase to this new meetup object
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup);
      }

      console.log('meetups= ', meetups)
      setIsLoading(false)
      setLoadedMeetups(meetups)
    });
  }, []);


  if(isLoading){
    // Display a loading paragraph if the page is still loading
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

    return <section>
        <h1>All Meetups</h1>
        {/* render a list of data as jsx elements dynamically  */}
        <MeetupList meetups={loadedMeetups}/>
    </section>
}

export default AllMeetUpsPage;