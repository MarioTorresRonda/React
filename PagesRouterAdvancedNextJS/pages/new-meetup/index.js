import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetUpPage() {
    
    function addMeetUpHandler(enteredValues) {
        console.log( enteredValues );
    }

    return ( 
        <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    )
}