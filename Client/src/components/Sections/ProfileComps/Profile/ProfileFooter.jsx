import React from "react";

function ProfileFooter() {
  const footerLinks = [
    "Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Locations",
    "Instagram Lite",
    "Threads",
    "Contact Uploading & Non-Users",
    "Meta Verified",
  ];
  return (
    <div className="mt-15">
      <ul className="flex flex-wrap justify-center text-xs text-gray-400 gap-x-4 gap-y-1 mt-6">
        {footerLinks.map((link, index) => (
          <li key={index}>
            <a href="#" className="hover:underline">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center text-xs text-gray-400 mt-3">
        <span className="mr-2 cursor-pointer">English</span> |{" "}
        <span className="ml-2">© 2025 Instagram from Meta</span>
      </div>
    </div>
  );
}

export default ProfileFooter;
