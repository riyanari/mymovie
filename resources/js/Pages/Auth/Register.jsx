import { useEffect } from "react";
import Label from "@/Components/InputLabel";
import InputError from '@/Components/InputError';
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import ValidationError from "@/Components/ValidationError";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        
        // Post the data to the registration route
        post(route("register"), {
            onError: (error) => {
                if (error?.response?.data?.errors?.email) {
                    // Handle email already taken error
                    console.log("Email is already registered");
                }
            },
        });
    };

    return (
        <>
            <Head title="Sign Up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt="Sign Up Illustration"
                    />
                </div>
                <div className="py-12 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="Logo" />
                        <div className="my-[40px]">
                            <h2 className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </h2>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                            <ValidationError errors={errors}/>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label htmlFor="name" value="Name" />
                                    <TextInput
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        placeholder="Your name..."
                                        isFocused={true}
                                        handleChange={handleOnChange}
                                        required
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div>
                                    <Label htmlFor="email" value="Email" />
                                    <TextInput
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        placeholder="Your email..."
                                        handleChange={handleOnChange}
                                        required
                                    />
                                    {/* Add an error message here for email duplication */}
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div>
                                    <Label htmlFor="password" value="Password" />
                                    <TextInput
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        placeholder="Your password..."
                                        handleChange={handleOnChange}
                                        required
                                    />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="password_confirmation"
                                        value="Confirm Password"
                                    />
                                    <TextInput
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        placeholder="Confirm your password..."
                                        handleChange={handleOnChange}
                                        required
                                    />
                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <PrimaryButton type="submit" processing={processing}>
                                    <span className="text-base font-semibold">Sign Up</span>
                                </PrimaryButton>
                                <Link href={route("login")}>
                                    <PrimaryButton variant="light-outline">
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </PrimaryButton>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
