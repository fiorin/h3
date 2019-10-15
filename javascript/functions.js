document.addEventListener('DOMContentLoaded',function(){
    var html = []
    var hero, secondary;
    for (index in heroes) {
        hero = heroes[index]
        html += '<tr><td class="text-capitalize">'+hero.name+'<br/><small class="text-secondary text-capitalize">'+hero.class+'</small></td>'
        html += '<td><img src="img/heroes/'+hero.name+'_l.bmp" alt="'+hero.name+'"></td>'
        html += '<td><img src="img/heroes/'+hero.name+'_s.bmp" alt="'+hero.name+'"></td>'
        html += '<td><img src="img/specialty/'+hero.name+'_sl.bmp" alt=""></td>'
        html += '<td>'
        for (indexSecondary in hero.secondary) {
            secondary = hero.secondary[indexSecondary]
            console.log(secondary)
            html += '<img src="img/secondary/'+secondary.type+'-'+secondary.level+'.bmp" alt="'+secondary.type+'">'
        }
        html += '</td>'
        html += '<td class="text-center text-secondary"><i class="far fa-circle fa-lg"></i><br/><small>not yet</small></td>'
        html += '<td><b><span class="text-secondary">VCMI</span><br/><span class="text-capitalize">'+hero.faction+'</span></b></td></tr>'
    }
    $('#heroes-data').html(html)
})

var heroes = [
    {
        name: 'agatha',
        faction: 'castle',       
        class: 'cleric',
        secondary: [{
            type: 'wisdom',level: 'basic'},{
            type: 'firstAid',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: 'elena',
        faction: 'castle',      
        class: '',
        secondary: [{
            type: 'leadership',level: 'basic'},{
            type: 'tactics',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: 'richard',
        faction: 'castle',     
        class: '',
        secondary: [{
            type: 'states',level: 'basic'},{
            type: 'luck',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: '16',
        faction: 'Castle',    
        class: '',
        secondary: [{
            type: 'leadership',level: 'basic'},{
            type: 'necromancy',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: 'h1',
        faction: 'rampart',    
        class: '',
        secondary: [{
            type: 'pathfinding',level: 'advanced'
        }],
        project: 'VCMI'
    },
    {
        name: 'baltasar',
        faction: 'fortress',     
        class: '',
        secondary: [{
            type: 'logistics',level: 'basic'},{
            type: 'artillery',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: '6',
        faction: 'cove',       
        class: '',
        secondary: [{
            type: 'scholar',level: 'basic'},{
            type: 'scouting',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: '2',
        faction: 'cove',     
        class: '',
        secondary: [{
            type: 'navigation',level: 'basic'},{
            type: 'artillery',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: 'marian',
        faction: 'cove',     
        class: '',
        secondary: [{
            type: 'navigation',level: 'basic'},{
            type: 'tactics',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: 'lucius',
        faction: 'inferno',   
        class: '',
        secondary: [{
            type: 'leadership',level: 'basic'},{
            type: 'resistance',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: '18',
        faction: 'inferno',    
        class: '',
        secondary: [{
            type: 'wisdom',level: 'basic'},{
            type: 'fireMagic',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: '14',
        faction: 'tower',       
        class: '',
        secondary: [{
            type: 'states',level: 'basic'},{
            type: 'armorer',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: '15',
        faction: 'dungeon',   
        class: '',
        secondary: [{
            type: 'states',level: 'basic'},{
            type: 'eagleeye',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: 'caesar',
        faction: 'cove',      
        class: '',
        secondary: [{
            type: 'offence',level: 'basic'},{
            type: 'scouting',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: '10',
        faction: 'fortress',   
        class: '',
        secondary: [{
            type: 'mysticism',level: 'basic'},{
            type: 'firstaid',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: 'eordan',
        faction: 'conflux',       
        class: '',
        secondary: [{
            type: 'armorer',level: 'basic'},{
            type: 'earthMagic',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: '7',
        faction: 'stronghold', 
        class: '',
        secondary: [{
            type: 'luck',level: 'basic'},{
            type: 'pathfinding',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: 'mogh',
        faction: 'ruins',      
        class: '',
        secondary: [{
            type: 'earthmagic',level: 'expert'},{
            type: 'intelligence',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: 'horae',
        faction: 'ruins',      
        class: '',
        secondary: [{
            type: 'earthmagic',level: 'basic'},{
            type: 'ballistics',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: 'mabon',
        faction: 'ruins',       
        class: '',
        secondary: [{
            type: 'luck',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: 'hernandez',
        faction: 'neutral',      
        class: 'bard',
        secondary: [{
            type: 'scholar',level: 'basic'},{
            type: 'diplomacy',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: 'luna',
        faction: 'neutral',      
        class: 'bard',
        secondary: [{
            type: 'scholar',level: 'basic'},{
            type: 'firstaid',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: '3',
        faction: 'rampart',   
        class: 'ranger',
        secondary: [{
            type: 'pathfinding',level: 'basic'},{
            type: 'tactics',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: '5',
        faction: 'neutral',  
        class: 'merchant',
        secondary: [{
            type: 'states',level: 'basic'},{
            type: 'logistics',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: 'foglio',
        faction: 'neutral',       
        class: 'bard',
        secondary: [{
            type: 'luck',level: 'advanced'}
        ],
        project: 'VCMI'
    },
    {
        name: '13',
        faction: 'rampart',   
        class: 'ranger',
        secondary: [{
            type: 'archery',level: 'basic'},{
            type: 'pathfinding',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: '19',
        faction: 'tower',   
        class: 'alchemist',
        secondary: [{
            type: 'offence',level: 'basic'},{
            type: 'scouting',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: '20',
        faction: 'rampart',   
        class: 'druid',
        secondary: [{
            type: 'diplomacy',level: 'advanced'
        }],
        project: 'VCMI'
    },
    {
        name: '22',
        faction: 'necropolis',      
        class: 'necromancer',
        secondary: [{
            type: 'necromancy',level: 'basic'},{
            type: 'scholar',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: '24',
        faction: 'necropolis',  
        class: 'death knight',
        secondary: [{
            type: 'necromancy',level: 'basic'},{
            type: 'armorer',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: '25',
        faction: 'fortress',   
        class: '',
        secondary: [{
            type: 'wisdom',level: 'basic'},{
            type: 'mysticism',level: 'basic'
        }],
        project: 'VCMI'
    },
    {
        name: '26',
        faction: 'fortress',      
        class: '',
        secondary: [{
            type: 'scouting',level: 'basic'},{
            type: 'logistics',level: 'basic'
        }],
        project: 'VCMI'
    },
    /* {
        name: ,
        faction: ,
        portrait: ,
        miniature: ,
        especiality: ,
        secondary: [
            {
                type: ,
                level: 
            },
            {
                type: ,
                level: 
            }
        ]
    } */
]