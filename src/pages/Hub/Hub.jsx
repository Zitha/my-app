import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Hub() {

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img src={logo} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Learning Hub
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="mt-6">
                        <div className="relative">
                            <div className="flex flex-col justify-start items-start gap-1 m-auto">
                                <Link to="https://widget.getcody.ai/public/9a31654e-cc0f-428c-bfd9-d55727d985a7">Physical Science</Link>
                                <Link to="https://widget.getcody.ai/public/9a30fd8e-e87d-4164-807c-1a065e820821">Geography</Link>
                                <Link to="https://widget.getcody.ai/public/9a30eea8-7ffc-4cb1-a925-cbe20a9817da">Life Sciences</Link>
                                <Link to="https://widget.getcody.ai/public/9a30e026-12f4-4bb8-9da6-8aa01b0cfbca">Business Studies</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hub;
