

const registerRoute = async(data: RegisterationType) => {
    const url = `https://backend.getlinked.ai/hackathon/registration`;
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

export default registerRoute