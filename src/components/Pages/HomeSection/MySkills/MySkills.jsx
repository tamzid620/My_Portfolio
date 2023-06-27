import html from '../../../../../src/assets/icons/html.png'

const MySkills = () => {
    return (
        <div className="my-20">
            <h2 className="font-bold text-3xl uppercase flex justify-center ">My Skills</h2>
            <div>
                <div className='bg-zinc-100 p-2 rounded-lg w-[160px] flex justify-center'>
                    <img className='w-[150px]' src={html} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MySkills;