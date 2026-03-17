"use server"

import MainPage from "./main";

async function getSite() {
    try {
        const response = await fetch(`${process.env.API_URL}/site`, {
            cache: 'no-store',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return {
            launched: false,
            contractAddress: "",
        };
    }
}

export default async function Page() {
    const site = await getSite();

    return (
        <MainPage launched={site.launched} contractAddress={site.contract_address} />
    )
}