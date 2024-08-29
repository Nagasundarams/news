import './Card.css';
const Card = ({data}) => {

    
    return (<>
    

        <div className='card'>
            <div className='img'><img loading='lazy' src={data.urlToImage}></img></div>
            <h5>{data.title}</h5>
            <p className='para'>{data.description}</p>
           
            <a target='_blank' href={data.url}>Read More</a>
            <p className='srcname'>Source-{data.source.name}</p>

            
        </div>
        
    


    </>);
}
export default Card;