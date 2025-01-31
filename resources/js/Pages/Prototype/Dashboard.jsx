import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard() {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard </title>
            </Head>
            {/* <!-- Featured --> */}
            <div>
                <div class="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity class="gap-[30px]" options={flickityOptions}>
                    {/* <!-- Movie Thumbnail --> */}
                    {[1, 2, 3, 4].map((i) => (
                        <FeaturedMovie
                            key={i}
                            slug="the-batman-in-love"
                            name={`The Batman In Love ${i}`}
                            category="Comedy"
                            thumbnail="https://picsum.photos/id/1/300/300"
                            rating={i + 1}
                        />
                    ))}
                </Flickity>
            </div>
            {/* <!-- End Featured --> */}
            {/* <!-- Browse --> */}
            <div class="mt-[50px]">
                <div class="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity class="gap-[30px]" options={flickityOptions}>
                    {/* <!-- Movies 1 --> */}
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <MovieCard
                            key={i}
                            slug="the-batman-in-love"
                            name={`The Batman In Love ${i}`}
                            category="Comedy"
                            thumbnail="https://picsum.photos/id/1/300/300"
                        />
                    ))}
                </Flickity>
            </div>
            {/* <!-- /Continue Watching --> */}
        </Authenticated>
    );
}
