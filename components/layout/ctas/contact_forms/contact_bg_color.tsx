import { MyContext } from "@/context/brains";
import { sendEmail } from "@/pages/api/crm/email-crm";

import React, {
  HTMLInputTypeAttribute,
  useContext,
  useRef,
  useState,
} from "react";

export interface NewRecordType {
  "Email Address": { email: string };
  Company: {
    has_more: boolean;
    id: string;
    type: string;
    relation: [{ id: string }];
  };
  "Converted to Opportunity": { checkbox: boolean };
  Owner: { id: string; type: string; people: [] };
  Title: {
    id: string;
    rich_text: { text: { content: string } }[];
    type: string;
  };
  Message: {
    id: string;
    rich_text: { text: { content: string } }[];
    type: string;
  };
}

type Props = {
  address: string;
  phoneNumber: string;
  email: string;
};

const ContactSection: React.FC<Props> = ({ address, phoneNumber, email }) => {
  const brains = useContext(MyContext);
  console.log("BrainsContactContext", brains);
  const brainKeys = Object.keys(brains);
  const addToContacts = brains.addToMarketingCrm;

  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  type InputProps = {
    type: HTMLInputTypeAttribute;
  };

  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailAddressRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const API_ENDPOINT = "api/crm/email-crm";

    const fullNameValue = fullNameRef.current?.value;
    const emailAddressValue = emailAddressRef.current?.value;
    const messageValue = messageRef.current?.value;

    const formData = new FormData();
    formData.append("name", fullNameValue!);
    formData.append("email", emailAddressValue!);
    formData.append("message", messageValue!);

    const newRecordData: NewRecordType = {
      "Email Address": { email: emailAddressValue || "" },
      Company: {
        has_more: false,
        id: "your-company-id-here",
        relation: [{ id: "678980s" }],
        type: "relation",
      },
      "Converted to Opportunity": { checkbox: false },
      Owner: { id: "your-user-id-here", people: [], type: "user" },
      Title: {
        id: "your-title-id-here",
        rich_text: [{ text: { content: fullNameValue ?? "" } }],
        type: "title",
      },
      Message: {
        id: "your-message-id-here",
        rich_text: [{ text: { content: messageValue ?? "" } }],
        type: "rich_text",
      },
    };

    //  const message = {
    //    from: emailAddressValue,
    //    to: "oni.contact.mail@gamil.com",
    //    subject: "New Project Lead",
    //    text: messageRef,
    //    html: `<p>${messageRef}</p>`,
    //  };
    let contactPostData = { newRecord: newRecordData };

    try {
      // addToContacts(contactPostData);
      console.log("Sending Email")
      fetch(API_ENDPOINT, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error("Error submitting form:", error);
      // handle the error, such as showing an error message to the user
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-500 rounded-2xl bg-gradient-opacity-50 to-slate-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
      <div className="container flex flex-col px-6 py-12 mx-auto min-h-screen">
        <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
          <div className="text-white lg:mx-6 lg:w-1/2">
            <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
              Get a quote
            </h1>
            <p className="mt-6 max-w-xl">
              Ask us everything and we would love to hear from you
            </p>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-2 w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="mx-2 w-72 text-white truncate">{address}</span>
              </p>
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-2 w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="mx-2 w-72 text-white truncate">
                  {phoneNumber}
                </span>
              </p>
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-2 w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12v-2a3 3 0 00-3-3H6a3 3 0 00-3 3v2"
                  />
                  <circle cx="7.5" cy="10.5" r=".5" />
                  <circle cx="16.5" cy="10.5" r=".5" />
                </svg>
                <span className="mx-2 w-72 text-white truncate">{email}</span>
              </p>
            </div>
          </div>

          <form className="flex-1 lg:mx-6 lg:w-1/2">
            <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
              Contact Us
            </h1>
            <div className="mt-6 space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Full Name
                </label>
                <input
                  className="block px-4 py-3 w-full bg-transparent rounded-lg border-2 border-white focus:border-blue-500 focus:outline-none"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  ref={fullNameRef}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Email Address
                </label>
                <input
                  className="block px-4 py-3 w-full bg-transparent rounded-lg border-2 border-white focus:border-blue-500 focus:outline-none"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={emailAddress}
                  onChange={(event) => setEmailAddress(event.target.value)}
                  ref={emailAddressRef}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  className="block px-4 py-3 w-full bg-transparent rounded-lg border-2 border-white focus:border-blue-500 focus:outline-none"
                  placeholder="Enter your message"
                  rows={6}
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  ref={messageRef}
                />
              </div>
              <button
                onClick={handleClick}
                className="inline-block px-8 py-3 w-full leading-none text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:bg-blue-700 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
