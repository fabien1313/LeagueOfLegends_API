const championOne = document.getElementById('aatrox')
const championTest = document.getElementById('test')
const championTest1 = document.getElementById('test1')

// championOne.innerHTML = 'hello'


const leagueoflegendsApi = 'http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json'

fetch(leagueoflegendsApi)
    .then(response => {
        return response.json()

        

    }).then (data => {
        let champArray = Object.keys(data.data) // crreates array of the first key values in the data object
        for (let index = 0; index < champArray.length; index++) {
            const champIndex = champArray[index];
            let firstAttempt = (data.data[champIndex]) // all 162 champion objects
            let splashImage = (data.data[champIndex].image.full)
            let splashUrl = "http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/"+splashImage
            let champName = Object.keys(data.data).indexOf(champIndex) // returns index values 0-162

            
            let {data: 
                    {[champIndex]:{
                        blurb,
                        id,
                        image: {full, group, sprite},
                        info: {attack, defense, difficulty, magic},
                        key,
                        name,
                        partype,
                        stats: {armor, armorperlevel, attackdamage, attackdamageperlevel, attackrangem, attackspeed,attackspeedperlevel, crit, critperlevel, hp, hpperlevel, hpregen, hpregenperlevel, movespeed, mp, mpperlevel, mpregen, mpregenperlevel, spellblock, spellblockperlevel},
                        tags: {[0]: role1, [1]:role2},
                        title
                    }}
            } = data

            console.log(champIndex);

            
           

         
            

       

        
        


    }});

    