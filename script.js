fetch(SCRIPT_URL, {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(data),
    redirect: "follow"
})
