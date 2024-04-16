import Agus from './img/Agus.jpeg';
import './Home.css';

const Home = () => {
  return (
    <div>
        <div className='home-container'>
            <div className='item1'>
                <h2>agustina</h2>
                <h2>alles</h2>
                <p>personal trainer</p>
                <p>- especializada en mujeres -</p>
            </div>
            <div className='item2'>
                <img className='image' src={Agus} alt="agus alles" />
            </div>
        </div>
    </div>
  )
}

export default Home;
