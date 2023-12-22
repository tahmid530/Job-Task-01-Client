import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddTask = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()


    const onSubmit = (data) => {
        console.log(data)

        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Products Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })
    }

    return (
        <>
            <div className="bg-[#F4F3F0] px-24 py-12 my-5">
                <h2 className="text-3xl font-extrabold mb-8">Add a Task</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" {...register("name", { required: true })} name="name" className="input input-bordered w-full" />
                                {errors.name && <span>This field is required</span>}
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <label className="input-group">
                                <input type="date" {...register("deadline", { required: true })} name="deadline" className="input input-bordered w-full" />
                                {errors.deadline && <span>This field is required</span>}
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" {...register("description", { required: true })} name="description" className="input input-bordered w-full" />
                                {errors.description && <span>This field is required</span>}
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Priority</span>
                            </label>
                            <label className="input-group">
                                <input type="text" {...register("priority", { required: true })} name="priority" className="input input-bordered w-full" />
                                {errors.priority && <span>This field is required</span>}
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Task" className="btn btn-outline w-full" />
                </form>
            </div>
        </>
    );
};

export default AddTask;