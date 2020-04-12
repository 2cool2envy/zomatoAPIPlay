let getResturentDetails = (lat, long) => {
    return new Promise((resolve, reject) => {

        let url = `https://developers.zomato.com/api/v2.1/search?lat=31.1471305&lon=75.34121789999999&sort=rating`
        fetch(url, {
            method: 'GET',
            headers: {
                "user-key": ""
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