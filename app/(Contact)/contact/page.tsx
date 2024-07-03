import React from "react";
import HeadTitleContact from "./components/HeadTitleContact";

const ContactPage = () => {
  return (
    <main className="container px-5 lg:px-[20%] mt-20 text-neutral-800 dark:text-neutral-300">
      <HeadTitleContact />
      <form className="flex flex-col space-y-4 transition-all duration-300">
        <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-2 md:space-y-0">
          <div className="w-full space-y-2">
            <input
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="w-full space-y-2">
            <input
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Email"
              name="email"
            />
          </div>
        </div>
        <div className="w-full space-y-2">
          <textarea
            className="flex h-[200px] w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Message"
            name="message"
          />
        </div>
        <div className="w-full space-y-2">
          <button className="flex w-full items-center justify-center rounded-md bg-neutral-800 px-3 py-3 text-sm font-medium text-neutral-300 transition-all duration-300 hover:bg-neutral-700">
            Send message
          </button>
        </div>
      </form>
    </main>
  );
};

export default ContactPage;
