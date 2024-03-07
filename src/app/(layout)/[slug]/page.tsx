'use client'

import { useParams } from "next/navigation";

const SingleGamePage = () => {
    const params = useParams<{slug: string}>()
    return <span>{params.slug}</span>;
};

export default SingleGamePage;
