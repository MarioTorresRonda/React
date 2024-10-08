import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetUpPage() {
    
    const router = useRouter();

    async function addMeetUpHandler(enteredValues) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify( enteredValues ),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        console.log( data );

        router.push('/');
    }

    return ( 
        <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    )
}