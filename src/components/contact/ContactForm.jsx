import { Facebook, Send, TwitterIcon } from "lucide-react";

export default function ContactForm() {
  return (
    <>
      <div className="px-32 max-md:px-10 w-full h-auto flex mt-24 py-16 max-lg:flex-col max-lg:gap-10">
        <div className="form-text w-[60%] max-lg:w-[100%] h-full flex">
          <div>
            <h1 className="relative z-10 text-4xl max-[1080px]:text-3xl pr-5">
              Stay updated with crypto trends!
            </h1>
            <p className="text-gray-400 pr-10">
              Stay ahead with the latest crypto insights and updates delivered
              straight to your inbox!
            </p>
          </div>
        </div>
        <div className="form w-[40%] max-lg:w-[100%] h-full">
          <form action="" className="px-10 max-xl:px-0">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2">
                Email Address
              </label>
              <input
                type="email"
                name=""
                id=""
                className="bg-[rgba(255,255,255,.1)] text-sm px-2 py-3 outline-none border-none rounded-md"
                placeholder="Enter Email Address"
              />
            </div>
            <div className="flex flex-col mt-10">
              <label htmlFor="message" className="mb-2">
                Message
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[rgba(255,255,255,.1)] text-sm px-2 py-3 outline-none border-none rounded-md"
                placeholder="Enter Your Message"
              />
            </div>
            <button className="mt-5 flex items-center justify-center gap-3 px-5 rounded-full py-3 bg-[#FEE715] text-black">
              Send <Send className="h-[18px]" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
