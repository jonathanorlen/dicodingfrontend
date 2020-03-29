import clubs from './clubs.js';

class DataSource {
//    constructor(onSuccess, onFailed) {
//        this.onSuccess = onSuccess;
//        this.onFailed = onFailed;
//    }
 
    static searchClub(keyword) {

        return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
        .then(respon => {
            return respon.json();
        })
        .then(responJson => {
            if(responJson.teams){
                return Promise.resolve(responJson.teams);
            }else{
                return Promise.reject(`${keyword} is not found"`);
            }
        })
        // return new Promise((resolve, reject) => {
        //     const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
        //     if (filteredClubs.length) {
        //         resolve(filteredClubs);
        //     } else {
        //         reject(`${keyword} is not found"`);
        //     }
        // });
    }
}

export default DataSource;