import { useState, useRef } from "react";

export default function Topbar() {
    const [dropdownOpen, setDropdownOpen] = useState(true);
    const dropdownTarget = useRef();

    const triggerDropdown = () => {
        if (dropdownOpen) {
            dropdownTarget.current.classList.remove("hidden");
        } else {
            dropdownTarget.current.classList.add("hidden");
        }
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div class="flex justify-between items-center cursor-pointer">
            <input
                type="text"
                class="top-search"
                placeholder="Search movie, cast, genre"
            />
            <div class="flex items-center gap-4">
                <span class="text-black text-sm font-medium">
                    Welcome, Granola Sky
                </span>
                {/* <!-- user avatar --> */}
                <div class="collapsible-dropdown flex flex-col gap-2 relative">
                    <div
                        class="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button"
                        onClick={triggerDropdown}
                    >
                        <img
                            src="/images/avatar.png"
                            class="rounded-full object-cover w-full"
                            alt=""
                        />
                    </div>
                    <div
                        class="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden"
                        ref={dropdownTarget}
                    >
                        <a
                            href="#!"
                            class="transition-all hover:bg-sky-100 p-4"
                        >
                            Dashboard
                        </a>
                        <a
                            href="#!"
                            class="transition-all hover:bg-sky-100 p-4"
                        >
                            Settings
                        </a>
                        <a
                            href="sign_in.html"
                            class="transition-all hover:bg-sky-100 p-4"
                        >
                            Sign Out
                        </a>
                    </div>
                </div>
            </div>
            <style jsx="true">{`
                .top-search {
                    background-image: url('/icons/ic_search.svg');
                }
            `}

            </style>
        </div>
    );
}
