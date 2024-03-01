import Head from 'next/head';
import { MongoClient, ObjectId } from "mongodb";
import MeetUpDetail from "../../components/meetups/MeetUpDetail";

export default function MeetUpPage(props) {
  return <>
    <Head>
      <title> {...props.meetupData.title } </title>
    </Head>
    <MeetUpDetail {...props.meetupData} />;
  </>
}

export async function getStaticProps(context) {
  const meetupId = new ObjectId(context.params.meetupId);

  const client = await MongoClient.connect(
    "mongodb+srv://root:1234@react.dhbuqmj.mongodb.net/?retryWrites=true&w=majority&appName=react"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
      _id: meetupId,
  });

  console.log(selectedMeetup);

  client.close();

  return {
    props: {
      meetupData: {
        ...selectedMeetup,
        _id: selectedMeetup._id.toString()
      },
    },
  };
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://root:1234@react.dhbuqmj.mongodb.net/?retryWrites=true&w=majority&appName=react"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}
