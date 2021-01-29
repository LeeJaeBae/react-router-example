import HomeContainer from "./Home/HomeContainer";
import {Link} from "react-router-dom";

const Routes = {
    home: {
        component: HomeContainer,
        name: 'HOME',
        path: "/"
    }
}

export const useRouter = () => {
    console.log(Object.values(Routes))
    return Object.values(Routes).map(v => {
        return <Link to={v.path}>{v.name}</Link>
    })
}

export default Routes;