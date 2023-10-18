import './bottom.css';
import { data } from '../assets/data/data';
import Quote from '../reusables/quote/Quote';

function Bottom() {
    return (
        <div className='bottom'>
            {
                data.map(singleInfo => {
                    return <Quote key={singleInfo.id}
                        {...singleInfo}
                    />
                })
            }
        </div>
    )
}


export default Bottom;