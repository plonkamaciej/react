import Component1 from '../assets/config.png';
import Component2 from '../assets/jsx-ui.png';
import Component3 from '../assets/components.png';
import Component4 from '../assets/state-mgmt.png';


function CoreConcept(props) {
  return (
    <div className='Comp-wrapper'>
      <img className='img-Comp' src={props.image} alt="image" />
      <h2>{props.title}</h2>
      <br />
      <p>{props.desc}</p>
    </div>
  )
}

export function Main() {
  return (
    <div>
      <main className="Main">
        <h1>Welcome to React</h1>
        <br />
        <div className="Cores">
          <CoreConcept  title="Components" desc="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." image={Component1}/>
          <CoreConcept  title="React" desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae." image={Component2}/>
          <CoreConcept  title="Hooks" desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident." image={Component3}/>
          <CoreConcept  title="States" desc="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est." image={Component4}/>
 
        </div>
      </main>
    </div>
  );
}

export default Main