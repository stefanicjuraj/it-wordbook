import React from 'react';
import { Link } from 'react-router-dom';

const Form: React.FC = () => {

    // Import the form submission access key
    const accessKey = import.meta.env.VITE_ACCESS_KEY || '';

    return (
        <>
            {/* Headers */}
            <h1 className="text-md font-medium text-gray-900 text-center mt-10">
                Thank you for your interest in contributing.
            </h1>
            <h1 className="text-md text-gray-900 text-center mt-2 mx-10">
                Suggest a word and its definition to be added using the form below.
            </h1>

            {/* Form */}
            <form className="max-w-screen-sm mx-auto bg-gray-50 p-8 rounded-lg mt-10"
                action="https://api.web3forms.com/submit"
                method="POST">
                {/* Form input */}
                <input type="hidden" name="access_key" value={accessKey} />

                {/* Word label */}
                <label htmlFor="word" className="block mb-2 text-md text-gray-900">
                    Word(s)
                </label>
                {/* Word input */}
                <input className="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                    type="text"
                    name="word"
                    id="word"
                    maxLength={30}
                    placeholder="IT"
                    autoComplete="off"
                    required />

                {/* Definition label */}
                <label htmlFor="definition" className="block mt-4 mb-2 text-md text-gray-900">
                    Definition(s)
                </label>
                {/* Definition input */}
                <textarea className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                    name="definition"
                    id="definition"
                    rows={4}
                    maxLength={500}
                    placeholder="Short for information technology; the use of computer systems and devices to store, access, retrieve and send information."
                    autoComplete="off"
                    required>
                </textarea>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mt-4 group">
                        {/* Name / Alias label */}
                        <label htmlFor="name" className="block mb-2 text-md  text-gray-900">
                            Name / Alias
                        </label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md">
                            </span>
                            {/* Name / Alias input */}
                            <input className="rounded-none rounded-r-lg border border-gray-300  text-gray-900 focus:ring-gray-500 focus:border-gray-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                                type="text"
                                name="name"
                                id="name"
                                maxLength={50}
                                autoComplete="off"
                                placeholder="John Doe" />
                        </div>
                        {/* Name / Alias subtext */}
                        <p className="mt-2 text-sm text-gray-500">Optional - credit your contribution.</p>
                    </div>

                    <div className="relative z-0 w-full mt-4 group">
                        {/* Email label */}
                        <label htmlFor="email" className="block mb-2 text-md text-gray-900">
                            Email
                        </label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md">
                            </span>
                            {/* Email input */}
                            <input className="rounded-none rounded-r-lg border border-gray-300  text-gray-900 focus:ring-gray-500 focus:border-gray-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                                type="email"
                                name="email"
                                id="email"
                                maxLength={50}
                                autoComplete="off"
                                placeholder="john.doe@gmail.com" />
                        </div>
                        {/* Email subtext */}
                        <p className="mt-2 text-sm text-gray-500">Optional - if you want to be contacted back.</p>
                    </div>
                </div>

                {/* Button submit */}
                <button type="submit" className="mt-8 inline-flex items-center justify-center px-5 py-3 text-md font-medium text-center bg-gray-200 text-gray-900 rounded-lg focus:ring-1 focus:ring-white border-white border hover:underline hover:shadow-sm hover:shadow-white">
                    Submit
                </button>

                {/* Hidden inputs */}
                <input type="hidden" name="redirect" value=""></input>
                <input type="hidden" name="from_name" value="IT wordbook"></input>
                <input type="hidden" name="subject" value="NEW SUBMISSION"></input>

            </form>

            <div className="max-w-screen-sm mx-auto mt-10 mb-10">
                {/* Link back to wordbook */}
                <Link to="/" className="inline-flex items-center justify-center px-5 py-3 text-sm text-center text-gray-900 rounded-lg focus:ring-1 focus:ring-white border-white border hover:underline hover:shadow-sm hover:shadow-white">
                    Back to wordbook
                </Link>
            </div>
        </>
    );
}

export default Form;
