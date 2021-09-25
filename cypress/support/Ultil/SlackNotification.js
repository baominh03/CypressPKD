/// <reference types="Cypress" />



export class SlackNotification {

    sendMessagetoNotification(strMsg) {
        cy.request({
            method: 'POST',
            url: 'https://slack.com/api/chat.postMessage',
            headers: { authorization: 'Bearer ' + 'xoxb-2533878935924-2533960483620-WpmkhPxk7PUWxk8B49QzU3Gw' },
            body: {
                channel: '#notification',
                text: strMsg,
                username: 'Bao Le Auto [' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5) + ']',
                icon_emoji: ':cv-imange:'
            },
        })
    }

    sendMessagetoTelegram(strMsg) {
        let token = 'bot2016255777:AAGHTZg6soaNc2C_ovEvnf6P30J0cd4GHG8';
        let group_id = '-550249062'
        let url = `https://api.telegram.org/${token}/sendMessage?chat_id=${group_id}&text=${strMsg}`
        cy.request({
            method: 'POST',
            url: url
        })
    }

    sendMsgToSlackAndTelegram(str) {
        this.sendMessagetoNotification(str)
        this.sendMessagetoTelegram(str)
    }


}
export const slackNotification = new SlackNotification()