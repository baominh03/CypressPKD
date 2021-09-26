### CypressPKD

### **Prerequisites**

Before you continue, ensure you meet the following requirements:

* Window OS only
* Visual Code: https://code.visualstudio.com/
* Latest nodejs:  [NodeJS Pages](https://nodejs.org/en/download/)
* Latest npm: ```npm install -g npm```
* Install cypress at current working directory: ```npm install cypress --save-dev``` or [Cypress installation](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)


### **Execution**
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


### **Slack/ telegram integration**

## 1. **Slack API**: 

# Setup:
* Register Slack account: https://slack.com/get-started
* Create slack apps, get slack **slack_token**: [Working with the Slack API in Node.js](https://thecodebarbarian.com/working-with-the-slack-api-in-node-js.html)
* Get **user_id (or member_id)**: [How to find my Member ID](https://moshfeu.medium.com/how-to-find-my-member-id-in-slack-workspace-d4bba942e38c)
* From your slack desktop app, create channel then capture channel id ( e.g: #notification)

# Config: 
Config slack api at .\cypress.json
```
{
  "ignoreTestFiles": "**/examples/*",
  "viewportHeight": 1080,
  "viewportWidth": 1920,
  "defaultCommandTimeout": 20000,
  "pageLoadTimeout": 60000,
  "projectId": "v3p98k",
  "slack_channel": "#notification",
  "staminaThreshold": 80,
  "env": {
    "slack_token": "slack token",
    "slack_icon_emoji": "avarta",
    "slack_user": "member id",
    "telegram_token": "your telegram token",
    "telegram_group_id": "your group id"
  }
}
```
# More custom for Slack bot:
https://api.slack.com/methods/

![image](https://user-images.githubusercontent.com/39981269/134810157-c9c7a37a-d140-4634-96c2-6ccba951d7f9.png)


## 2. **Telegram API**: 

# Setup:
Create a bot and save your telegram token: https://sendpulse.com/knowledge-base/chatbot/create-telegram-chatbot
Get group id: https://www.wikihow.com/Know-Chat-ID-on-Telegram-on-Android

# Config: 
Config slack api at .\cypress.json
```
{
  "ignoreTestFiles": "**/examples/*",
  "viewportHeight": 1080,
  "viewportWidth": 1920,
  "defaultCommandTimeout": 20000,
  "pageLoadTimeout": 60000,
  "projectId": "v3p98k",
  "slack_channel": "#notification",
  "staminaThreshold": 80,
  "env": {
    "slack_token": "slack token",
    "slack_icon_emoji": "avarta",
    "slack_user": "member id",
    "telegram_token": "your telegram token",
    "telegram_group_id": "your group id"
  }
}
```
![image](https://user-images.githubusercontent.com/39981269/134810326-a59bf79c-8f56-40cc-bd0b-05e82097922b.png)



More function will be update later!!!!!!

