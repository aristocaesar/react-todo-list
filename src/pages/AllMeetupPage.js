import { useEffect, useState } from "react";
import MeetupList from "../components/meetup/MeetupList";

function AllMeetupPage() {
  const [loading, setLoading] = useState(true);
  const [dataMeetup, setDataMettup] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-meetup-list-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((res) => res.json())
      .then((data) => {
        let meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setLoading(false);
        setDataMettup(meetups);
      });
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <h1>All Meetups</h1>
      <MeetupList meetups={dataMeetup} />
    </>
  );
}

export default AllMeetupPage;
