let getResturentDetails = (data) => {
    return new Promise((resolve, reject) => {

        let url = `https://developers.zomato.com/api/v2.1/search?lat=${data[0]}&lon=${data[1]}&sort=rating`
        fetch(url, {
            method: 'GET',
            headers: {
                "user-key": "78ba6e6017761520488ab233f54223ed"
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("Result : ", result);
                    resolve(result)
                },
                (error) => {
                    resolve(reject);
                }
            )
    })
}
export default getResturentDetails;