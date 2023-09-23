

const getCategoryList = async () => {
    const url = `https://backend.getlinked.ai/hackathon/categories-list`
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    };

    try {
        const res = await fetch(url, options);
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default getCategoryList