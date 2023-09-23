

const contactRoute = async(data: ContactType) => {
    const url = `https://backend.getlinked.ai/hackathon/contact-form`;
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    };

    try {
        const res = await fetch(url, options);
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default contactRoute