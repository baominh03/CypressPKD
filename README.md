# CypressPKD

## **Prerequisites**

Before you continue, ensure you meet the following requirements:

* Window OS only
* Visual Code: https://code.visualstudio.com/
* Latest nodejs:  [NodeJS Pages](https://nodejs.org/en/download/)
* Latest npm: ```npm install -g npm```
* Install cypress at current working directory: ```npm install cypress --save-dev``` or [Cypress installation](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)


## **Execution**
1. Config your account at ```./cypress/fixture/xxxxx.json```
```
{
  "email": "yourEmail",
  "password": "yourPassword",
  "primaryPet": 3, //select pet to eat
  "fuckPet": 1, //pet to eat boom (food with <0 enegry)
  "dificulty": "easy"  //Enemies level: easy, normal, hard, extreme
}
```

2. Execute cli by using terminal:

```
npx cypress run --spec 'cypress/integration/farm.spec.js' --headed --browser chrome --no-exit
npx cypress run --spec 'cypress/integration/farm1.spec.js' --headed --browser chrome --no-exit
```

3. Manualy **set up** and **connect** Metamask wallet to petkingdom **for the first time**:
![image](https://user-images.githubusercontent.com/39981269/134517213-91378b09-3277-41a5-af77-4e646a186e58.png)

* Import or create new wallet [How to import wallet MetaMask](https://metamask.zendesk.com/hc/en-us/articles/360015489331-How-to-import-an-Account), [How to create new wallet MetaMask](https://metamask.zendesk.com/hc/en-us/articles/360015289452-How-to-create-an-additional-account-in-your-MetaMask-wallet) 
* Add Binance Smart Chain network: [How to add BNB network](https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain)
![image](https://user-images.githubusercontent.com/39981269/134517959-ef9b3996-5cab-4e18-ab0c-ec1893a1cf2a.png)
![image](https://user-images.githubusercontent.com/39981269/134518014-cad49c8e-551a-4018-8982-023c5fe7d35d.png)

4. Back to cypress chrome tab -> re-run the tools
![image](https://user-images.githubusercontent.com/39981269/134518322-0cab1a7b-6dd5-4ef8-a529-0ae6ae67e4a3.png)
![image](https://user-images.githubusercontent.com/39981269/134518958-4839247b-3fdd-4f75-91a5-85bf661333ad.png)


More function will be update later!!!!!!

