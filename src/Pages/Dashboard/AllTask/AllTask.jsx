import { useLoaderData } from "react-router-dom";

const AllTask = () => {
    const tasks = useLoaderData();

    return (
        <>
            <div className="flex max-w-full gap-6">
                <div>
                    <div className="bg-slate-300 p-8">
                        <h3 className="text-2xl font-semibold mb-10">To Do List</h3>
                        <div className="gap-6">
                            {
                                tasks.map(task => (
                                    <div key={task._id} className="card w-full lg:w-96 border-2 border-black shadow-md mx-auto lg:mx-0 mb-8">
                                        <img src={task.image} alt="" className="rounded-xl w-[320px] mx-auto mt-10" />
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title text-[#444444] text-2xl font-bold">{task.name}</h2>
                                            <h3 className="text-[#FF3811] text-xl font-semibold">{task.deadline}</h3>
                                            <h2 className="card-title text-[#444444]">{task.description}</h2>
                                            <h2 className="card-title text-[#444444]">{task.priority}</h2>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="bg-slate-300 p-8">
                        <h3 className="text-2xl font-semibold">Ongoing List</h3>
                        <p className="text-2xl font-semibold">To Do Listdfcccccccccccccccccc</p>
                    </div>
                </div>
                
                <div className="">
                    <div className="bg-slate-300 p-8">
                        <h3 className="text-2xl font-semibold">Complete</h3>
                        <p className="text-2xl font-semibold">To Do Listdfcccccccccccccccccccc</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllTask;