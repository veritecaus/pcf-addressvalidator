# Introduction 
An address validation control for D365 CE/PowerApps that utilises the Experian (https://www.experian.com.au/) Global Intuitive Address Validation service (https://www.edq.com/documentation/apis/address-validate/global-intuitive/).

Utilising Experian, this control is capable of validating addresses from a large number of countries - https://www.edq.com/documentation/apis/address-validate/global-intuitive/#supported-countries-2.

[Demo Video](/AddressDemo.mp4)
# Quick Start
## Download
You can download the compiled control in a solution format from the releases tab and then deploy to your D365/PowerApps instance.
## Configure Control in D365 CE/PowerApps
1. Import solution through maker portal (https://make.powerapps.com)
2. Add text field to your desired form
3. Add the custom control (Veritec_AddressValidator) to the field.
4. Add values for the mandatory fields ExperianToken (your auth token) and AddressSearch (the field that this control is bound to).
5. All other fields are optional and are used to map the selected address to your fields on the form.

Note, there is currently a bug that stops you from mapping the outputs of the control to out-of-the-box address fields. This is a known issue and Magnetism has supplied us with a work around - https://community.dynamics.com/crm/b/magnetismsolutionscrmblog/posts/binding-to-address-fields-in-a-pcf-control)
#Compile from Source
The following instructions are provided for those who prefer to compile from source.
## Configure environment
There are some software prerequisites required to compile this application. 
1. Install Node.js and NPM - https://nodejs.org/en/
2. Install .Net Developer Pack - https://dotnet.microsoft.com/download/dotnet-framework/net462
3. Install VS 2017 (or later) OR Install .NET Core 2.2 SDK and then install Visual Studio Code
4. Install PowerApps CLI - https://aka.ms/PowerAppsCLI 

More Info: https://docs.microsoft.com/en-us/powerapps/developer/component-framework/get-powerapps-cli
## Download Source and Compile
1. Download source code from the this repository (git clone or download zip)
2. Open the "Developer Command Prompt" 
3. Navigate to "Veritec.PCF.AddressValidator" folder in source root
4. Execute "npm install"
3. Execute "npm run build"
4. Navigate to the deployment folder "cd deployment\VeritecPcfAddressValidator"
5. Execute "MSBUILD /t:restore"
6. Execute "MSBUILD"

You now have a solution that is ready to be dpeloyed to your target D365/PowerApps project - "deployment\VeritecPcfAddressValidator\bin\Debug\VeritecPcfAddressValidator.zip".