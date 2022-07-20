// version with dummy data
import MeetupList from '../components/meetups/MeetupList';
const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];
function AllMeetUpsPage()
{
    return <section>
        <h1>All Meetups</h1>
        {/* render a list of data as jsx elements dynamically  */}
        <MeetupList meetups={DUMMY_DATA}/>
        {/* <ul>
            {DUMMY_DATA.map((meetup) => {
                // for each item in the DUMMY_DATA, print its title as a list element
                return <li key={meetup.id}>{meetup.title}</li>
            })}
        </ul> */}

    </section>
}

export default AllMeetUpsPage;