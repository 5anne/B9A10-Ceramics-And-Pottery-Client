import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="text-center mt-20">
            <Helmet>
                <title>Clay Pot | 404_not_found</title>
            </Helmet>
            <h1 className="text-2xl">{error.status} {error.statusText}</h1>
            <p>{error.data}</p>
            <p>Go Back to <Link to="/" className="hover:bg-gray-300 px-2 rounded-lg">Home</Link></p>
        </div>
    );
};

export default ErrorPage;