# Introduction 
An address validation control that utilises the Experian web services.

# Getting Started

## Configure environment
There are some software prerequisites required to compile this applicaiton. See the following link for advice.
https://debajmecrm.com/2019/04/26/part-2-setting-up-development-environment-and-custom-component-project/

## Download Source and Compile
1. download source code
2. npm install
3. npm run build
4. cd deployment\VeritecPcfAddressValidator
5. MSBUILD /t:restore
6. MSBUILD
7. deploy solution "deployment\VeritecPcfAddressValidator\bin\Debug\VeritecPcfAddressValidator.zip" to your target environment

## Configure Control in D365/PowerApps
