function addGuest() {
    console.log("YOU MADE IT")
    const url = "/catch";
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Response status: ${res.status}');
        }
        const result = await res.text();
        console.log(result);

    } catch (error) {
        console.log(result);
    }
  
    

}