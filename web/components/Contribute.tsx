export default function Contribute() {
  return (
    <div className="max-w-screen-md p-6 mx-auto mt-4">
      <h1 className="mx-auto mb-8 text-3xl font-bold text-center">
        Contribute
      </h1>
      <p className="mb-6 text-black">
        Thank you for your interest in contributing. Fill out the form below to
        add a new word and its definition, or to update an existing one.
      </p>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="space-y-4"
      >
        <input
          type="hidden"
          name="access_key"
          value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY}
        />
        <input type="hidden" name="from_name" value="techbook.digital"></input>
        <input type="hidden" name="subject" value="New Contribution"></input>
        <div>
          <label htmlFor="word" className="block mb-2 font-bold">
            Word
          </label>
          <input
            type="text"
            name="word"
            placeholder="Enter your word"
            required
            minLength={1}
            maxLength={50}
            autoComplete="off"
            className="w-full px-4 py-4 bg-white border border-b-4 border-r-4 border-black rounded-lg focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="definition" className="block mb-2 font-bold">
            Definition
          </label>
          <textarea
            name="definition"
            placeholder="Enter the definition of the word"
            required
            rows={4}
            minLength={1}
            maxLength={300}
            autoComplete="off"
            className="w-full px-4 py-4 bg-white border border-b-4 border-r-4 border-black rounded-lg focus:outline-none"
          ></textarea>
        </div>
        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />
        <button
          type="submit"
          className="w-full px-4 py-4 transition-colors duration-300 bg-white border border-b-4 border-r-4 border-black rounded-lg cursor-pointer focus:outline-none hover:border-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
