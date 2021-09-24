/// <reference types="Cypress" />

export class ListFood {

    //negative <0
    red_herb = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/49662978.png';
    ruby_stone = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/75932754.png';
    watermelon = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/16488576.png';
    toilet_paper = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/54731387.png';
    dirty_shoes = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/80396782.png';
    dead_bomb = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/67885922.png';
    snack_fries = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/69306414.png';
    unicorn_shit = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/69813211.png';
    deadly_soup = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/58509097.png';
    cooked_beef = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/89463942.png';
    devil_heart = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/17965595.png';
    snack_hamburger = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/87605044.png';
    egg_shell = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/92093320.png';
    mars_cheese = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/71277890.png';
    mer_soybean = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/12393433.png';


    //positive >=0
    whiskey_77 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/49815049.png';
    venus_ramen = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/61687281.png';
    twin_banana = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/80034544.png';
    chivas_94 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/67044498.png';
    sushi = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/76774563.png';
    fastfood = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/96869018.png';
    mars_crab = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/25360298.png';
    baobao_jupiter = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/46296854.png';
    ginseng = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/95350236.png';
    juicy = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/87779185.png';
    pizza = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/80106606.png';
    smile_shit = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/92305097.png';
    e_toilet = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/32367935.png';
    mer_steak = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/84474502.png';
    venus_head = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/24134796.png';
    grape_earth = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/36734706.png';
    dragon_mango = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/67812425.png';
    tomyum = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/58242256.png';
    tomyum2 = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/92752285.png'
    tsingtao_beer = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/68415666.png';
    diet_set = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/91611099.png';
    ocean_coak = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/25076955.png';
    scrazy_sushi = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/35329542.png';
    normal_rice = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/96556520.png';
    s_dragon = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/59567946.png';
    croissant = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/93403058.png';
    hotdog = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/39488050.png';
    spring_rolls = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/12025235.png';
    wasabi_shit = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/35621270.png';
    sweet_candy = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/86051484.png';
    marshmallow = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/65149216.png';
    shrimp = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/59734156.png';
    spaghetti = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/14336190.png';
    lemak_mercury = 'https://cms-pkd-image.s3.ap-southeast-1.amazonaws.com/96951273.png';


    convertListFoodtoEnegryNumber(url) {
        switch (url) {
            case this.whiskey_77: case this.chivas_94: case this.baobao_jupiter: case this.e_toilet: case this.ocean_coak: case this.s_dragon: case this.spring_rolls:
                return 2
            case this.venus_ramen: case this.lemak_mercury: case this.spaghetti: case this.shrimp: case this.hotdog: case this.wasabi_shit: case this.twin_banana: case this.sushi: case this.fastfood: case this.mars_crab: case this.ginseng: case this.normal_rice: case this.juicy: case this.scrazy_sushi: case this.pizza: case this.mer_steak: case this.venus_head: case this.tomyum: case this.grape_earth: case this.tomyum2:
                return 1
            case this.smile_shit: case this.dragon_mango:
                return 10
            case this.tsingtao_beer: case this.diet_set, this.sweet_candy:
                return 0
            case this.red_herb: case this.mer_soybean: case this.ruby_stone: case this.mars_cheese: case this.egg_shell: case this.watermelon: case this.toilet_paper: case this.ruby_stone: case this.dirty_shoes: case this.snack_fries: case this.cooked_beef: case this.snack_hamburger:
                return -1
            case this.deadly_soup: case this.devil_heart:
                return -2
            case this.dead_bomb:
                return -100
            default:
                return 1
        }

    }


    // getListFoodFromStoreNegative(url) {
    //     switch (url) {
    //         case this.red_herb, this.ruby_stone, this.watermelon, this.toilet_paper, this.ruby_stone, this.dirty_shoes, this.snack_fries, this.cooked_beef:
    //             return -1
    //         case this.deadly_soup, this.devil_heart:
    //             return -2
    //         case dead_bomb:
    //             return -100
    //         case 'extreme':
    //             return -1
    //         default:
    //             return -1
    //     }

    // }

}

export const listFood = new ListFood()