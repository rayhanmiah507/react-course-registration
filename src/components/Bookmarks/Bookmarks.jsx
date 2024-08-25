import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'


const Bookmarks = ({ datapas, addcredit, remaining, totalPrice }) => {
    return (
        <div className="md:w-1/3 my-8">


            <div className="bg-slate-200 p-4 m-4 rounded-xl space-y-4">

                {/* <div className="relative pb-2">
                    <h2 className="text-lg font-bold text-[#2F80ED] mb-2">Credit Hour Remaining</h2>
                    <div className="absolute bottom-0 left-0 right-0 border-b-4 border-l-slate-500"></div>
                </div> */}

                <div className=" border-b-4 border-lime-100">
                    <h2 className="text-lg font-bold text-[#2F80ED] mb-2">Credit Hour Remaining: {remaining}</h2>
                </div>

                <div className=" border-b-4 border-lime-100">
                    <h2 className="text-xl font-bold">Course Name</h2>
                    <h3>
                        {
                            datapas.map((datashow, idx) => <Bookmark key={idx} datashow={datashow}></Bookmark>)
                        }
                    </h3>
                </div>


                <div className=" border-b-4 border-lime-100">
                    <h2 className="text-base">Total Credit Hour: {addcredit} </h2>
                </div>

                <div className=" border-b-4 border-lime-100">
                    <h2 className="text-base font-semibold">Total Price: {totalPrice}</h2>
                </div>
            </div>

        </div>
    );
};

Bookmarks.propTypes = {
    datapas: PropTypes.array.isRequired
}

export default Bookmarks;