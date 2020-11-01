import { config } from '../utils/config'

class Country {

    async getCountries() {
        let response = await fetch(config.url + '/rest/v2/all?fields=name;region;capital', {
            method: 'GET'
        });
        try {
            let data = await response.json()
            return data;
        } catch (e) {
            throw "Error fetching data"
        }
    }

    async getCountryByName(name) {
        let response = await fetch(config.url + `/rest/v2/name/${name}?fullText=true&fields=name;region;capital;flag;subregion;area;population;timezones;nativeName`, {
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