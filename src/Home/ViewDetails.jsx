import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const item = useLoaderData();
    console.log(item);
    return (
        <div>

        </div>
    );
};

export default ViewDetails;