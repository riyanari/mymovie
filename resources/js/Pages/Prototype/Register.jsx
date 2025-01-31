import Label from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Input from "@/Components/TextInput";
import { Link, Head } from "@inertiajs/react";
import React from "react";

export default function Register() {
    return (
        <>
        <Head title='Sign Up'/>
            <div class="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
            <div class="fixed top-[-50px] hidden lg:block">
                <img
                    src="/images/signup-image.png"
                    class="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                    alt=""
                />
            </div>
            <div class="py-12 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                <div>
                    <img src="/images/moonton-white.svg" alt="" />
                    <div class="my-[40px]">
                        <div class="font-semibold text-[26px] mb-3">
                            Sign Up
                        </div>
                        <p class="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br />
                            the better insight for your life
                        </p>
                    </div>
                    <form class="w-[370px]">
                        <div class="flex flex-col gap-6">
                            <div>
                                <Label
                                    forInput="fullname"
                                    value="Full Name"
                                />
                                <Input
                                    type="fullname" 
                                    name="fullname"
                                    placeholder="Your fullname..."
                                    defaultValue="Riyan Ariyawan"
                                />
                            </div>
                            <div>
                                <Label
                                    forInput="email"
                                    value="Email"
                                />
                                <Input
                                    type="email" 
                                    name="email"
                                    placeholder="Your email..."
                                    defaultValue="riyan@mymovie.test"
                                />
                            </div>
                            <div>
                                <Label
                                    forInput="password"
                                    value="Password"
                                />
                                <Input
                                    type="password" 
                                    name="password"
                                    placeholder="Your password..."
                                    defaultValue="HSdjhjdhj"
                                />
                            </div>
                        </div>
                        <div class="grid space-y-[14px] mt-[30px]">
                            <Link href={route("prototype.dashboard")}>
                                <PrimaryButton>
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </PrimaryButton>
                            </Link>
                            <Link href={route("prototype.login")}>
                                <PrimaryButton variant="light-outline">
                                    <span className="text-base text-white">
                                        Sign In to My Account
                                    </span>
                                </PrimaryButton>
                            </Link>
                            {/* <button type="submit" class="rounded-2xl bg-alerange py-[13px] text-center">
                                <span class="text-base font-semibold">
                                    Sign Up
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
