/// <reference types="Cypress" />

import { slackNotification } from "../Ultil/SlackNotification";

export class ListFood {

    //negative <0
    red_herb = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/49662978.png';
    red_herb2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/66844143.png';
    red_herb3 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/94382925.png';
    red_herb4 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/89537695.png';
    ruby_stone = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/75932754.png';
    watermelon = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/16488576.png';
    toilet_paper = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/54731387.png';
    toilet_paper2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/11652115.png';
    dirty_shoes = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/80396782.png';
    dead_bomb = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/67885922.png';
    dead_bomb2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/19343018.png';
    dead_bomb3 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/96363084.png';
    snack_fries = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/69306414.png';
    
    deadly_soup = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/58509097.png';
    cooked_beef = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/89463942.png';
    cooked_beaf2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/89463942.png';
    devil_heart = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/17965595.png';
    devil_heart1 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/23325825.png';
    snack_hamburger = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/87605044.png';
    egg_shell = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/92093320.png';
    mars_cheese = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/71277890.png';
    mer_soybean = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/12393433.png';
    croissant = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/93403058.png';
    

    // arrBadFood = [
    //     "Extremely careful. Pet Will Die", //dead_bomb -100
    //     "Devil's Heart will be harmfull for little soul", //devil_heart -2
    //     "Hate the mell. Oops!! Your pet seems to hate the smell of Dirty paper on Venus", //toilet_paper:  -1
    //     "Hate the mell. Oops!! Your pet seems to hate the smell of Mars Cheese", //mars_cheese: -1
    //     "Snack fries taste is good, but not for your Pet's health", //snack_fres: -1
    //     "Love it! Yummy, Ruby Stones is great bu can not eat", // Ruby_stone: -1
    //     "Deadly Soup is dangerous for your Pet", //deadly_soup: -2
    //     "Mersoybean has bad smell with your Pet", //mer_soybean: -1
    // ]

    arrBadFood = [
        "Extremely careful. Pet Will Die", //dead_bomb -100
        "Devil's Heart will be harmful for little soul", //devil_heart -2
        "Hate the mell. Oops!! Your pet seems to hate the smell of Dirty paper on Venus", //toilet_paper:  -1
        "Hate the mell. Oops!! Your pet seems to hate the smell of Mars Cheese", //mars_cheese: -1
        "Snack fries taste is good, but not for your Pet's health", //snack_fres: -1
        "Love it! Yummy, Ruby Stones is great bu can not eat", // Ruby_stone: -1
        "Deadly Soup is dangerous for your Pet", //deadly_soup: -2
        "Mersoybean has bad smell with your Pet",
        "reb_herb duplicate with good food -> ignore", //reb_herb: -1
        "Cooked or Uncooked?",//beaf -1
        "Hate the mell. Oops!! Your pet seems to hate the smell of Watermelon", //wartermelon -1 
        "Hate the mell. Oops!! Your pet seems to hate the smell of Dirty Shoes", //dirty shoes
    ]

    //positive >=0
    whiskey_77 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/49815049.png';
    venus_ramen = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/61687281.png';
    twin_banana = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/80034544.png';
    chivas_94 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/67044498.png';
    sushi = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/76774563.png';
    fastfood = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/96869018.png';
    mars_crab = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/25360298.png';
    baobao_jupiter = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/46296854.png';
    baobao = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/47093372.png';
    baobao2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/84131716.png';
    baobao3 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/68727234.png';
    baobao4 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/41646158.png';
    ginseng = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/95350236.png';
    ginseng2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/39789542.png';
    juicy = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/87779185.png';
    juicy2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/72278655.png';
    pizza = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/80106606.png';
    smile_shit = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/92305097.png';
    smile_shit2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/42626223.png';
    e_toilet = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/32367935.png';
    e_toilet2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/93400973.png';
    mer_steak = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/84474502.png';
    mer_steak2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/71632219.png';
    venus_head = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/24134796.png';
    grape_earth = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/36734706.png';
    dragon_mango = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/67812425.png';
    dragon_mango2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/78333158.png';
    dragon_mango3 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/28242398.png';
    tomyum = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/58242256.png';
    tomyum2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/92752285.png'
    tsingtao_beer = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/68415666.png';
    diet_set = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/91611099.png';
    ocean_coak = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/25076955.png';
    ocean_coak2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/43685434.png';
    ocean_coak3 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/14600401.png';
    scrazy_sushi = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/35329542.png';
    normal_rice = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/96556520.png';
    s_dragon = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/59567946.png';
    hotdog = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/39488050.png';
    spring_rolls = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/12025235.png';
    spring_roll2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/55726601.png';
    spring_roll3 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/47264681.png';
    spring_roll4 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/40140427.png';
    wasabi_shit = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/35621270.png';
    wasabi_shit2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/99915670.png';
    sweet_candy = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/86051484.png';
    marshmallow = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/65149216.png';
    shrimp = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/59734156.png';
    shrimp2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/10037517.png';
    spaghetti = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/14336190.png';
    lemak_mercury = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/96951273.png';
    mars_soup = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/24414255.png';
    unknow_dog = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/75817131.png';
    another = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/49526379.png';
    metal_rice = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/15271659.png';
    metal_rice2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/84260061.png';
    mercury_ramen = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/90508845.png';
    mars_squid = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/96754876.png';
    gold_piece = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/85324954.png';
    forgot_map = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/44422524.png';
    unicorn_shit = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/69813211.png';
    unicorn_shit2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/17201476.png';
    sushi_shrimp = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/74382060.png';
    mars_meat = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/48081396.png';
    dark_apple = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/50926219.png';
    bubble_enegry = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/80926200.png';
    venus_soup = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/19744140.png';
    fire_pot = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/70802781.png';
    fire_pot2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/80385887.png';
    sun_apple = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/22065988.png';
    bread_flour = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/59117837.png';
    egg_noodles = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/27909413.png';
    toxic_meat = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/89336758.png';
    sun_sashimi = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/90015605.png';
    nude_shrimp = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/50226759.png';
    nude_shrimp2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/51212268.png';
    venus_fish = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/69741461.png';
    hokkaido = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/27980336.png';
    spicy_squid = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/33800828.png';
    corona_beer = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/35789155.png';
    



    convertListFoodtoEnegryNumber(url, tooltip) {
        
        if (this.arrBadFood.map(name => name.toLowerCase()).includes(tooltip.toLowerCase())) {
            slackNotification.sendMessagetoSlack('Found Negative/bad food -> let fuck pet eat - tooltip: '+ tooltip)
            return -1
        }
        else {
            switch (url) {
                case this.corona_beer: case this.spicy_squid: case this.hokkaido: case this.venus_fish: case this.sun_sashimi: case this.toxic_meat: case this.egg_noodles: case this.bread_flour: case this.another: case this.nude_shrimp: case this.nude_shrimp2: case this.sun_apple: case this.fire_pot: case this.fire_pot2: case this.venus_soup: case this.bubble_enegry: case this.dark_apple: case this.mars_meat: case this.sushi_shrimp: case this.gold_piece: case this.forgot_map: case this.ginseng2: case this.mars_squid: case this.mercury_ramen: case this.metal_rice: case this.metal_rice2: case this.venus_ramen: case this.unknow_dog: case this.mars_soup: case this.marshmallow: case this.lemak_mercury: case this.spaghetti: case this.shrimp: case this.shrimp2: case this.hotdog: case this.wasabi_shit: case this.wasabi_shit2: case this.twin_banana: case this.sushi: case this.fastfood: case this.mars_crab: case this.ginseng: case this.normal_rice: case this.juicy: case this.juicy2: case this.scrazy_sushi: case this.pizza: case this.mer_steak: case this.mer_steak2: case this.venus_head: case this.tomyum: case this.grape_earth: case this.tomyum2:
                    return 1
                case this.baobao4: case this.baobao3: case this.ocean_coak2: case this.spring_roll3: case this.spring_roll4: case this.whiskey_77: case this.e_toilet2: case this.chivas_94: case this.baobao: case this.baobao2: case this.baobao_jupiter: case this.e_toilet: case this.ocean_coak: case this.ocean_coak3: case this.s_dragon: case this.spring_roll2: case this.spring_rolls:
                    return 2
                case this.unicorn_shit: case this.unicorn_shit2:
                    return 7
                case this.smile_shit: case this.smile_shit2: case this.dragon_mango: case this.dragon_mango2: case this.dragon_mango3:
                    return 10
                case this.tsingtao_beer: case this.diet_set: case this.sweet_candy:
                    return 0
                case this.cooked_beaf2: case this.red_herb: case this.red_herb2: case this.red_herb3: case this.red_herb4: case this.croissant: case this.mer_soybean: case this.ruby_stone: case this.mars_cheese: case this.egg_shell: case this.watermelon: case this.toilet_paper: case this.dirty_shoes: case this.snack_fries: case this.cooked_beef: case this.snack_hamburger: case this.toilet_paper2:
                    return -1
                case this.deadly_soup: case this.devil_heart: case this.devil_heart1:
                    return -2
                case this.dead_bomb: case this.dead_bomb2: case this.dead_bomb3:
                    return -100
                default:
                    cy.log('Not Found in list, please double check '+ url)
                    slackNotification.sendMessagetoSlack('Not Found in list, please double check - url: ' + url)
                    return 1
            }
        }

    }

}

export const listFood = new ListFood()