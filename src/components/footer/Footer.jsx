import { GithubIcon } from "lucide-react";

export default function Footer() {
  return (
    <>
      <hr className="w-[60%] relative left-[50%] -translate-x-[50%]" />
      <div className="px-32 max-lg:px-2 py-5 flex justify-between items-center max-lg:flex-col max-lg:gap-5">
        <h3 className="text-gray-300 max-sm:text-center">
          @Copyright 2025, all rights reserved by cryptosphere
        </h3>
        <a
          href="https://github.com/dhruv1086k"
          className="text-gray-300 flex items-center justify-center gap-5 hover:text-[#FEE715] transition-all max-sm:border max-sm:p-2 max-sm:rounded-full max-sm:px-5"
        >
          <GithubIcon />
          Github
        </a>
      </div>
    </>
  );
}
