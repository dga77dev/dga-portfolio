import Avatar from './Avatar.jsx';
import { Tarjeta } from './Tarjeta.jsx';

export default function Header({ job, miMail, miTfno }) {

    return (
        <div className='header'>
            <div className="division1">
                <Avatar />
                <div>
                    <h2>David Godoy Ávila</h2><br />
                    <h3>{job}</h3>
                </div>
            </div>
            <div className="division2">
                <Tarjeta miMail={miMail} miTfno={miTfno}/>
            </div>
        </div>
    )
}