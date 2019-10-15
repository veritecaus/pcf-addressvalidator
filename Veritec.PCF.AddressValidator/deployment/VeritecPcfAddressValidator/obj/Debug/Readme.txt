Deployment was configured with:

pac solution init --publisherName Veritec --customizationPrefix veritec
pac solution add-reference --path C:\controls\Veritec.PCF.AddressValidator


Create Solution File:
MSBUILD /t:restore

Finally build:

MSBUILD