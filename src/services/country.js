import { config } from '../utils/config'

class Country {

    async getCountries() {
        let response = await fetch(config.url + '/rest/v2/all?fields=name', {
            method: 'GET'
        });
        try {
            let data = await response.json()
            return data;
        } catch (e) {
            throw "Error fetching data"
        }
    }
}
export default new Country();