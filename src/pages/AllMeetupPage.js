import MeetupList from "../components/meetup/MeetupList";

function AllMeetupPage() {
  const DUMMY_DATA = [
    {
      id: 1,
      title: "Meetup dan diskusi rancangan berdirinya DKODE Creative",
      image:
        "https://awsimages.detik.net.id/community/media/visual/2017/07/10/8fe8c937-a4e2-4791-9699-cc9302c21930_169.jpg?w=700&q=90",
      address: "Blokagung - Karangdoro, Tegalsari, Banyuwangi",
      description:
        "Velit velit sunt laboris consectetur ut magna irure eu aliquip quis occaecat ea adipisicing ullamco.",
    },
    {
      id: 2,
      title: "Rapat besar bersama anggota parlemen UMKM",
      image:
        "https://awsimages.detik.net.id/community/media/visual/2017/07/10/8fe8c937-a4e2-4791-9699-cc9302c21930_169.jpg?w=700&q=90",
      address: "Blokagung - Karangdoro, Tegalsari, Banyuwangi",
      description:
        "Velit velit sunt laboris consectetur ut magna irure eu aliquip quis occaecat ea adipisicing ullamco.",
    },
  ];

  return (
    <>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </>
  );
}

export default AllMeetupPage;
