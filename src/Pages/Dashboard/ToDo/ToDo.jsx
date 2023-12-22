import { FaTrashAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ToDo = () => {

    const tasks = useLoaderData();

    const handleDelete = _id => {

        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {


                    fetch(`http://localhost:5000/tasks/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            if (data.deletedCount > 0) {
                                // refetch();
                                Swal.fire(
                                    'Deleted!',
                                    'Your Task has been deleted.',
                                    'success'
                                )
                            }
                        })
                }
            })
    }


    return (
        <>
            <div className="flex justify-evenly mb-8">
                <h2 className="text-4xl">Total Tasks: {tasks.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Deadline</th>
                            <th>Priority</th>
                            <th>Delete Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.description}
                                </td>
                                <td>
                                    {item.deadline}
                                </td>
                                <td>
                                    {item.priority}
                                </td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ToDo;