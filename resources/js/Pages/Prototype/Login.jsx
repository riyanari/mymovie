import Input from "@/Components/TextInput";
import Label from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, Head } from "@inertiajs/react";

export default function Login() {
    return (
        <>
        <Head title='Login'/>
            <div class="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div class="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        class="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div class="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div class="my-[70px]">
                            <div class="font-semibold text-[26px] mb-3">
                                Welcome Back
                            </div>
                            <p class="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form class="w-[370px]">
                            <div class="flex flex-col gap-6">
                                <div>
                                    {/* <label class="text-base block mb-2">Email Address</label> */}
                                    {/* <input 
                        type="email" 
                        name="email"
                            class="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                            placeholder="Email Address" /> */}
                                    <Label
                                        forInput="email"
                                        value="Email Address"
                                    />
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div>
                                    {/* <label class="text-base block mb-2">Password</label> */}
                                    {/* <input type="password" name="password"
                            class="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                            placeholder="Password" /> */}
                                    <Label
                                        forInput="password"
                                        value="Password"
                                    />
                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div class="grid space-y-[14px] mt-[30px]">
                                {/* <a href="/" class="rounded-2xl bg-alerange py-[13px] text-center">
                        <span class="text-base font-semibold">
                            Start Watching
                        </span>
                    </a> */}
                                <Link href="/">
                                    <PrimaryButton
                                        type="button"
                                        variant="primary"
                                    >
                                        <span class="text-base font-semibold">
                                            Start Watching
                                        </span>
                                    </PrimaryButton>
                                </Link>
                                <Link href={route("prototype.register")}>
                                    <PrimaryButton
                                        type="button"
                                        variant="light-outline"
                                    >
                                        <span class="text-base font-semibold">
                                            Create New Account
                                        </span>
                                    </PrimaryButton>
                                </Link>
                                {/* <a href="sign_up.html" class="rounded-2xl border border-white py-[13px] text-center">
                        <span class="text-base text-white">
                            Create New Account
                        </span>
                    </a> */}
                                {/* <button type="submit" class="rounded-2xl bg-alerange py-[13px] text-center">
                        <span class="text-base font-semibold">
                            Start Watching
                        </span>
                    </button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
