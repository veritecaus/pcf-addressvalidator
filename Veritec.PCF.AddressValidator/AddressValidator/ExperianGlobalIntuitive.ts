
export interface ExperianAddressSearch {
	count: number;
	results: ExperianAddressSearchResult[];
}

interface ExperianAddressSearchResult {
	suggestion: string;
	matched: any[];
	format: string;
}

/**
 * The following interface definitions mimick the Experian 
 * Global Intuitive JSON structure and is used to type check
 * return results to consumers
 */

export interface AddressFormatted {
    address: Address[];
    components: Component[];
    metadata: Metadata;
}

interface Address {
    addressLine1?: string;
    addressLine2?: string;
    addressLine3?: string;
    locality?: string;
    province?: string;
    postalCode?: string;
    country?: string;
}

interface Component {
    streetNumber1?: string;
    street1?: string;
    locality1?: string;
    province1?: string;
    provinceCode1?: string;
    postalCode1?: string;
    country1?: string;
    countryISO1?: string;
}

interface Metadata {
    addressSource: AddressSource;
}

interface AddressSource {
    code: string;
    description: string;
}

/**
 * Country ISO codes
 */
export enum ExperianCountry {
    Australia = "AUS",
    NewZealand = "NZL",
    Ireland = "IRL"
    /* todo - add the rest of the ISO codes support by Experian */
    /* https://www.edq.com/documentation/apis/address-validate/global-intuitive/*/
}

/**
 * Some countries have multiple datasets. For these countries
 * the consumer can select which dataset they would like to use
 */
export enum ExperianDataset {
    AustraliaDataFusion = "DataFusion",
    AustraliaGnaf = "GNAF",
    AustraliaPaf = "PAF",
    IrelandEircode = "Eircode",
    IrelandPaf = "PAF",
    NewZealandDatafusion = "DataFusion",
    NewZealandPAF = "PAF"
}

/**
 * https://www.edq.com/documentation/apis/address-validate/global-intuitive/
 */
export class ExperianGlobalIntuitive {

    private _authToken: string;


    constructor(authToken: string) {
        this._authToken = authToken;
    }

    public ExperianGlobalIntuitive(authToken: string) {
        this._authToken = authToken;
    }

    public async AddressSearch(addressSearchString: string, countryCode: ExperianCountry, dataset?: ExperianDataset): Promise<ExperianAddressSearch> {

        let queryString: string = `https://api.edq.com/capture/address/v2/search?auth-token=${this._authToken}&query=${addressSearchString}&country=${countryCode}`;

        if (dataset != null) {
            queryString += `&dataset=${dataset}`;
        }
        const response = await fetch(queryString);

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json() as Promise<ExperianAddressSearch>;
    }

    public async AddressFormat(searchURL: string): Promise<AddressFormatted> {
        
        let queryString: string = `${searchURL}&auth-token=${this._authToken}`;
        const response = await fetch(queryString)
        
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json() as Promise<AddressFormatted>;
    }
}

