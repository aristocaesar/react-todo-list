import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetup/NewMeetupForm";

function NewMeetupPage() {
  const page = useHistory();

  function saveMeetup(meetup) {
    fetch(
      "https://react-meetup-list-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetup),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => page.replace("/"));
  }

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={saveMeetup} />
    </section>
  );
}

export default NewMeetupPage;
