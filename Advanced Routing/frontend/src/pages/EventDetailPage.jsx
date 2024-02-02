import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
    
    const data = useRouteLoaderData('event-detail');
    return (
    <>
        <EventItem event={data.event} />
    </>
    )
}

export async function loader( { request, params } ) {
    const response = await fetch( `http://localhost:8080/events/${params.eventId}` )
    
    if( !response.ok ) {
        throw json(
            { message: 'Could not load event item'},
            { status: 500 }
        )
    }
    return response;
}

export async function action( { request, params } ) {

    const response = await fetch( `http://localhost:8080/events/${params.eventId}`, {
        method: request.method
    } );

    if( !response.ok ) {
        throw json(
            { message: 'Could not delete event'},
            { status: 500 }
        )
    }
    return redirect('/events');
}