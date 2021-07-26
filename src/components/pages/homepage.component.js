
import Directory from "../directory/directory.component";

const HomePage = ({history}) => {
    return ( 
        <div className="homepage">
           <Directory history={history}/>
        </div>
     );
}
 
export default HomePage;