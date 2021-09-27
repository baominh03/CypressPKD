/// <reference types="Cypress" />




export class SlackNotification {

    sendMessagetoSlack(strMsg) {
        try {
            cy.request({
                method: 'POST',
                url: 'https://slack.com/api/chat.postMessage',
                headers: { authorization: 'Bearer ' + Cypress.env('slack_token') },
                body: {
                    channel: Cypress.config('slack_channel'),
                    text: strMsg,
                    username: 'Bao Le Auto [' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5) + ']',
                    icon_emoji: Cypress.env('slack_icon_emoji')
                },
            })
        } catch (err) {
            this.sendMessagetoSlack('Error when posting msg to slack')
        }
    }

    sendMessagetoSlackWithTag(strMsg) {
        try {
            cy.request({
                method: 'POST',
                url: 'https://slack.com/api/chat.postMessage',
                headers: { authorization: 'Bearer ' + Cypress.env('slack_token') },
                body: {
                    channel: Cypress.config('slack_channel'),
                    username: 'Bao Le Auto [' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5) + ']',
                    icon_emoji: Cypress.env('slack_icon_emoji'),
                    user: Cypress.env('slack_user'),
                    text: '<@' + Cypress.env('slack_user') + '|cal> ' + strMsg
                },
            })
        }
        catch (err) {
            this.sendMessagetoSlack('Error when posting msg to slack')
        }
    }

    sendMessagetoTelegram(strMsg) {
        try {
        let token = Cypress.env('telegram_token');
        let group_id = Cypress.env('telegram_group_id');
        let url = `https://api.telegram.org/${token}/sendMessage?chat_id=${group_id}&text=${strMsg}`
        cy.request({
            method: 'POST',
            url: url
        })
    } catch (err) {
        this.sendMessagetoTelegram('Error when posting msg to telegram')
    }
    }

    sendMsgToSlackAndTelegram(str) {
        this.sendMessagetoSlack(str)
        this.sendMessagetoTelegram(str)
    }

    cypressInitialEnvironmentlog(email, indexPrimaryPet, indexFuckPet, slack_channel) {
        cy.log('Run email: ' + email)
        cy.log('primary pet: ' + indexPrimaryPet)
        cy.log('Fuck pet: ' + indexFuckPet)
        cy.log('Slack channel notification: ' + slack_channel)
    }

}
export const slackNotification = new SlackNotification()