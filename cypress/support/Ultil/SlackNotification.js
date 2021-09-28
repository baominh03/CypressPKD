/// <reference types="Cypress" />




export class SlackNotification {



    base64DecodeUnicode(str) {
        // Convert Base64 encoded bytes to percent-encoding, and then get the original string.
        let percentEncodedStr = atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join('');


        return decodeURIComponent(percentEncodedStr);
    }


    sendMessagetoSlack(str) {

        if (Cypress.config('notification') == true) {
            try {
                cy.request({
                    method: 'POST',
                    url: 'https://slack.com/api/chat.postMessage',
                    headers: { authorization: 'Bearer ' + this.base64DecodeUnicode(Cypress.env('slack_token')) },
                    body: {
                        channel: Cypress.config('slack_channel'),
                        text: str,
                        username: 'Bao Le Auto [' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5) + ']',
                        icon_emoji: Cypress.env('slack_icon_emoji')
                    },
                })
            } catch (Err) {
                cy.log('Slack error')
            }
        }

    }

    sendMessagetoSlackWithTag(strMsg) {

        if (Cypress.config('notification') == true) {
            try {
                cy.request({
                    method: 'POST',
                    url: 'https://slack.com/api/chat.postMessage',
                    headers: { authorization: 'Bearer ' + this.base64DecodeUnicode(Cypress.env('slack_token')) },
                    body: {
                        channel: Cypress.config('slack_channel'),
                        username: 'Bao Le Auto [' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5) + ']',
                        icon_emoji: Cypress.env('slack_icon_emoji'),
                        user: this.base64DecodeUnicode(Cypress.env('slack_user')),
                        text: '<@' + this.base64DecodeUnicode(Cypress.env('slack_user')) + '|cal> ' + strMsg
                    },
                })
            } catch (Err) {
                cy.log('Slack error')
            }
        }
    }

    sendMessagetoTelegram(strMsg) {
        if (Cypress.config('notification') == true) {

            let token = this.base64DecodeUnicode(Cypress.env('telegram_token'));
            let group_id = this.base64DecodeUnicode(Cypress.env('telegram_group_id'));
            let url = `https://api.telegram.org/${token}/sendMessage?chat_id=${group_id}&text=${strMsg}`
            cy.request({
                method: 'POST',
                url: url
            })

        } else {
            cy.log('No Slack')
        }
    }

    sendMsgToSlackAndTelegram(str) {
        this.sendMessagetoSlack(str)
        this.sendMessagetoTelegram(str)
    }

    // sendMsgToSlackTagUserAndTelegram(str) {
    //     this.sendMessagetoSlackWithTag(str)
    //     this.sendMessagetoTelegram(str)
    // }

    cypressInitialEnvironmentlog(email, indexPrimaryPet, indexFuckPet, slack_channel) {
        cy.log('Run email: ' + email)
        cy.log('primary pet: ' + indexPrimaryPet)
        cy.log('Fuck pet: ' + indexFuckPet)
        cy.log('Slack channel notification: ' + slack_channel)
    }

}
export const slackNotification = new SlackNotification()