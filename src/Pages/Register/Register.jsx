import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()



    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-2">Sign Up Now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full bg-slate-50 drop-shadow-md">
                    {/* onSubmit={handleSubmit(onSubmit)}  */}
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="your name" className="input input-bordered" />

                                {errors.name && <span className='text-red-600'>Name is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} name='photoURL' placeholder="photo url" className="input input-bordered" required />
                                {errors.photoURL && <span className='text-red-600'>photoURL is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>Email is required</span>}


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/
                                })} name='password' placeholder="password" className="input input-bordered" />

                                {/*error message  */}
                                {errors.password?.type === "required" && (
                                    <p className='text-red-600'>Password is required</p>
                                )}
                                {/*error message  */}
                                {errors.password?.type === "minLength" && (
                                    <p className='text-red-600'>Password must be 6 chracter</p>
                                )}

                                {/* password validation error message  */}
                                {errors.password?.type === "pattern" && (
                                    <p className='text-red-600'>Password must one uppercase one lowecase and one special chracter</p>
                                )}


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-sm font-medium dark:text-gray-300">Already have an account? <Link className="text-blue-700 hover:underline dark:text-blue-500" to='/login'>Please Login</Link> </a>
                                </label>
                            </div>
                            <div className="form-control mt-5">
                                <button type='submit' className="btn md:w-[320px] text-white text-center bg-gradient-to-r from-[#4A00E0] to-blue mt-6">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;