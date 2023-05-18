
import Marquee from 'react-fast-marquee';

const MarqueeSection = () => {
    return (
        <Marquee className='my-12'>
            <div className="card w-96 bg-base-100 shadow-xl mx-5">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/4gZ2NxH/71-h-MT1-Ii-BL-1.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Dump Truck</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, atque.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl mx-5">
  <figure className="px-10 pt-10 gap-5">
    <img src="https://i.ibb.co/12cPmJj/2805edc5e800dc550cdd2845086b33cb-1.jpg"
 alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Dump Truck</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, atque.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl mx-5">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/98546mh/WH1000-pr-e-1.jpg" 
 alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Dump Truck</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, atque.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </Marquee>
    );
};

export default MarqueeSection;