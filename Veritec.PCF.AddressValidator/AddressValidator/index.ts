import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { debounce, Options, Procedure } from 'ts-debounce';
import { ExperianGlobalIntuitive, ExperianCountry, ExperianDataset, ExperianAddressSearch, AddressFormatted } from "./ExperianGlobalIntuitive";

enum AsciiKeyCode {
	Enter = 13,
	Up = 38,
	Down = 40
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

export class AddressValidator implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private _inputElement: HTMLInputElement;
	private _inputKeyPress: EventListenerOrEventListenerObject;
	private _listItemClick: EventListenerOrEventListenerObject;
	private _context: ComponentFramework.Context<IInputs>;
	private _notifyOutputChanged: () => void;
	private _container: HTMLDivElement;
	private _searchDiv: HTMLDivElement;
	private _debouncedKeyPress: Procedure;

	private _experianGlobalIntuitive: ExperianGlobalIntuitive;
	private currentFocus: number;
	private _address : Address;

	constructor() {
	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='starndard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {

		this._context = context;
		this._notifyOutputChanged = notifyOutputChanged;
		this._container = container;
		this.currentFocus = -1;
		this._inputKeyPress = this.keyPress.bind(this);
		this._listItemClick = this.itemClick.bind(this);

		this._experianGlobalIntuitive = new ExperianGlobalIntuitive(context.parameters.EDQToken.raw);

		/* add search input form control */
		this._inputElement = document.createElement("input");
		this._inputElement.setAttribute("type", "text");
		this._inputElement.setAttribute("id", "searchInput-1");
		this._inputElement.setAttribute("autocomplete", "off"); // tell firefox and chrome not to auto complete
		this._inputElement.setAttribute("name", "searchInputField");
		this._inputElement.setAttribute("class", "autocomplete");
		this._inputElement.addEventListener("keyup", this._inputKeyPress)

		this._container.appendChild(this._inputElement);

		/* create a DIV element that will contain the items (values): */
		this._searchDiv = document.createElement("div");
		this._searchDiv.setAttribute("id", "01-autocomplete-list");
		this._searchDiv.setAttribute("class", "autocomplete-items");
		this._container.appendChild(this._searchDiv);
		this._searchDiv.hidden = true;

		/* add debounce variable for keypress */
		let debounceOptions: Options;
		debounceOptions = { isImmediate: false };
		this._debouncedKeyPress = debounce(this.keyPressDebounced, 200, debounceOptions);
	}

	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void {
		// Add code to update control view
		this._context = context;
	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs {
		return {
			addressLine1: this._address.addressLine1,
			addressLine2: this._address.addressLine2,
			addressLine3: this._address.addressLine3,
			locality: this._address.locality,
			province: this._address.province,
			postalCode: this._address.postalCode,
			country: this._address.country
		};
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void {
		// Add code to cleanup control if necessary
		delete this._experianGlobalIntuitive;
		delete this._inputElement;
		delete this._container;
	}

	private itemClick(evt: Event): void {
		let divItem = evt.target as HTMLDivElement;
		this._inputElement.value = '';
		this.clearSearchResults();

		let searchUrl = divItem.id;

		(async () => {

			this._experianGlobalIntuitive.AddressFormat(searchUrl)
				.then(function (response) {
					return response;
				})
				.then(formattedAddress => this.populateAddressData(formattedAddress));
		})()
	}

	private populateAddressData(formattedAddress: AddressFormatted): void {

		let address = formattedAddress.address;
		this._address.addressLine1 = address[0].addressLine1;
		this._address.addressLine2 = address[1].addressLine2;
		this._address.addressLine3 = address[2].addressLine3;
		this._address.locality = address[3].locality;
		this._address.postalCode = address[5].postalCode;
		this._address.province = address[4].province;
		this._address.country = address[6].country;

		this._notifyOutputChanged();
	}
	
	private keyPress(evt: Event): void {

		let keyboardEvent = evt as KeyboardEvent;

		if (keyboardEvent.keyCode == AsciiKeyCode.Down) { 
			this.currentFocus++;
			this.setActiveElement();
		} else if (keyboardEvent.keyCode == AsciiKeyCode.Up) { 
			this.currentFocus--;
			this.setActiveElement();
		} else if (keyboardEvent.keyCode == AsciiKeyCode.Enter) { 
			var element1 = this._searchDiv.childNodes[this.currentFocus] as HTMLDivElement;
			element1.click();
		}
		else {
			/* only perform search if not keys pressed above */
			this._debouncedKeyPress();
		}
	}

	private keyPressDebounced(): void {

		var queryString = this._inputElement.value;

		(async () => {

			this._experianGlobalIntuitive.AddressSearch(queryString, ExperianCountry.Australia, ExperianDataset.AustraliaDataFusion)
				.then(function (response) {
					return response;
				})
				.then(address => this.populateData(address));
		})()
	}

	private populateData(response: ExperianAddressSearch): void {

		this.clearSearchResults();

		response.results.forEach(element => {

			let searchItemDiv = document.createElement("DIV");
			/* make the matching letters bold */
			searchItemDiv.innerHTML = this.matchBold(element.suggestion, this._inputElement.value);
			searchItemDiv.setAttribute("class", "autocomplete-item");
			/* insert a input field that will hold the current array item's value */
			searchItemDiv.id = element.format;
			/* execute a function when someone clicks on the item value (DIV element) */
			searchItemDiv.addEventListener("click", this._listItemClick);

			this._searchDiv.appendChild(searchItemDiv);
		});

		if (response.results.length > 0) {

			let footer = document.createElement("DIV");
			footer.setAttribute("class", "list-footer");

			let footerWrapper = document.createElement("DIV");
			footerWrapper.setAttribute("class","list-footer-wrapper");
			footerWrapper.id = "list-footer-id";
			footerWrapper.appendChild(footer);
			this._searchDiv.appendChild(footerWrapper);
			this._searchDiv.hidden = false;
		}
	}

	private matchBold(inputString: string, find: string): string {
		let searchRegex = new RegExp(find, 'ig');
		let startpos = inputString.toLowerCase().indexOf(find.toLowerCase());
		return inputString.replace(searchRegex, '<b>' + inputString.substr(startpos, find.length) + '</b>');
	}

	private clearSearchResults(): void {
		this._searchDiv.innerHTML = '';
		this._searchDiv.hidden = true;
	}

	private setActiveElement(): void {
		/* clear active elements if they exist */
		this._searchDiv.childNodes.forEach(element => {
			let htmlElement = element as HTMLDivElement;

			if (htmlElement.id != "list-footer-id") {
				htmlElement.setAttribute("class", "autocomplete-item");
			}
		});

		if (this.currentFocus >= this._searchDiv.childNodes.length - 1) this.currentFocus = 0;
		if (this.currentFocus < 0) this.currentFocus = (this._searchDiv.childNodes.length - 2);

		let htmlElement = this._searchDiv.childNodes[this.currentFocus] as HTMLDivElement;
		htmlElement.setAttribute("class", "autocomplete-active")
	}
}