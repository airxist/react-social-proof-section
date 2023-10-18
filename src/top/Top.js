import './top.css';
import Rate from '../reusables/rate/Rate';

function Top() {
    return (
        <div className="top">
            <div className="intro">
                <h1 className="title bold text-big text-dark">10,000+ of our users love our products</h1>
                <p className="desc reg text-gray text-reg">
                    We only provide great products combined with excellent
                    customer service. See what our satisfied customers are saying
                    about our services.
                </p>
            </div>
            <div className="rating">
                <Rate area={'Reviews'} />
                <Rate area={'Report Guru'} />
                <Rate area={'BestTech'} />
            </div>
        </div>
    )
}

export default Top;