import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md rounded bg-white border-white border-1 border-solid ">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">
          Wil je contact opnemen met me? Laat hier je gegevens achter.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
              Email:
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-black border border-black text-black text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="naam@provider.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black">
              Onderwerp:
            </label>
            <input
              type="text"
              id="subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Je onderwerp"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-black">
              Bericht:
            </label>
            <textarea
              id="message"
              rows="6"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Je Bericht"
            ></textarea>
          </div>

          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-darkpink-700 focus:ring-4 focus:outline-none cursor-pointer"
          >
            Verstuur
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
