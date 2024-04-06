import PropTypes from 'prop-types';


const Author = ({element}) => {

    const {authorImage, name, about} = element
    return (
        <>

        <div>
            <div className=' flex flex-col lg:flex-row items-center gap-16 my-16 shadow-xl border border-[#13131326] py-8 px-6 rounded-lg '>
                <div className=' bg-[#1313130D] px-8 py-8 rounded-lg w-96 flex justify-center items-center '>
                <img src={authorImage} className=' w-56 h-56 object-cover rounded-lg' alt="" />
                </div>
                <div className=' w-full space-y-8'>
                    <div className=' flex items-center gap-8'>
                        <p className=' text-center text-2xl font-bold '>{name}</p>
                        <button className=' border-2 rounded-md font-medium px-7 border-[#1311118f] py-2 hover:bg-[#1313130D] '>+ Follow</button>
                    </div>
                <p><span className=' font-bold text-xl '>About Author:</span> {about}</p>
                </div>
            </div>
        </div>
        
        </>
    );
};

Author.propTypes = {
    element: PropTypes.object
}
export default Author;