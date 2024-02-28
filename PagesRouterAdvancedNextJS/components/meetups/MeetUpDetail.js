import classes from './MeetUpDetail.module.css'

export default function MeetUpDetail(props) {
    return <section className={classes.detail}>
        <img src={props.src} alt=''/>
        <h1> {props.title} </h1>
        <address> {props.adress} </address>
        <p> {props.description} </p>
    </section>
}