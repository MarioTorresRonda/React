import './CoreConcept.css';

export default function CoreConcept( {image, title, description} ) {
    return (
      <li className='core-concepts-item'>
        <img className='core-concepts-img' src={image} alt={title}></img>
        <h3> {title} </h3>
        <p> {description} </p>
      </li>
    )
  }