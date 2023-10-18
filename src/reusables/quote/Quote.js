import './quote.css';


function Quote({name, pic, quote}) {
    return (
        <div className='quote round'>
            <div className='up'>

                <img src={pic} alt={name} className='profile-image' />

                <div className='profile'>
                    <h3 className='name med text-light'>{name}</h3>
                    <p className='verify med text-pink'>Verified Buyer</p>
                </div>
            </div>

            <div className='down'>
                <q className='quote-text text-light reg text-reg'>
                    {quote}
                </q>
            </div>
        </div>
    )
}


export default Quote;