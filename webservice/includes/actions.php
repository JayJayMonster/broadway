<?php

/**
 * @return array
 */
function getShows()
{
    return [
        [
            "id" => 1,
            "name" => "Hamilton",
            "img" => "pictures/hamilton.jpg",
            "description" => "The real life of one of America's foremost founding fathers and first Secretary of the Treasury, Alexander Hamilton.",
            "tags" => ['Rap' , ' History' , ' Presidents'],

        ],
        [
            "id" => 2,
            "name" => "Aladdin",
            "img" => "pictures/aladdin.jpg",
            "description" => "A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.",
            "tags" => ['Hero', ' Monkey', ' Genie'],
        ],
        [
            "id" => 3,
            "name" => "Beetlejuice",
            "img" => "pictures/beetlejuice.jpg",
            "description" => "The spirits of a deceased couple are harassed by an unbearable family that has moved into their home, and hire a malicious spirit to drive them out.",
            "tags" => ['Ghosts',' Haunting'],
        ],
        [
            "id" => 4,
            "name" => "Mean Girls",
            "img" => "pictures/mean_girls.jpg",
            "description" => "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
            "tags" => ['High school', ' Popularity'],
        ],
        [
            "id" => 5,
            "name" => "Waitress",
            "img" => "pictures/waitress.jpg",
            "description" => "Jenna is a pregnant, unhappily married waitress in the deep south. She meets a newcomer to her town and falls into an unlikely relationship as a last attempt at happiness.",
            "tags" => ['Pregnancy', ' Waitress', ' Abusive husband'],
        ],
        [
            "id" => 6,
            "name" => "Kinky Boots",
            "img" => "pictures/kinky_boots.jpg",
            "description" => "A drag queen comes to the rescue of a man who, after inheriting his father's shoe factory, needs to diversify his product if he wants to keep the business afloat.",
            "tags" => ['Shoes', ' Drag'],
        ],
        [
            "id" => 7,
            "name" => "Les Miserables",
            "img" => "pictures/les_miserables.jpg",
            "description" => "In 19th-century France, Jean Valjean, who for decades has been hunted by the ruthless policeman Javert after breaking parole, agrees to care for a factory worker's daughter. The decision changes their lives forever.",
            "tags" => ['France', ' Poor', ' Revolution'],
        ],
        [
            "id" => 8,
            "name" => "Newsies",
            "img" => "pictures/newsies.jpg",
            "description" => "When young newspaper sellers are exploited beyond reason by their bosses they set out to enact change and are met by the ruthlessness of big business.",
            "tags" => ['Orphan', ' Paperboy'],
        ],
        [
            "id" => 9,
            "name" => "Rent",
            "img" => "pictures/rent.jpg",
            "description" => "Bohemians in the East Village of New York City struggling with life, love and AIDS, and the impacts they have on America.",
            "tags" => ['Drugs', ' Aids', ' New York City'],
        ],
        [
            "id" => 10,
            "name" => "Wicked",
            "img" => "pictures/wicked.jpg",
            "description" => "The story of how a green-skinned woman framed by the Wizard of Oz becomes the Wicked Witch of the West",
            "tags" => ['Witches', ' Oz'],
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getShowDetails($id)
{
    $tags = [
        1 => [
            "description" => "The real life of one of America's foremost founding fathers 
            and first Secretary of the Treasury, Alexander Hamilton.",
            "tags" => ['Rap', 'History', 'Presidents']
        ],
        2 => [
            "description" => "A kind-hearted street urchin and a power-hungry Grand Vizier 
            vie for a magic lamp that has the power to make their deepest wishes come true.",
            "tags" => ['Hero', 'Monkey', 'Genie']
        ],
        3 => [
            "description" => "The spirits of a deceased couple are harassed by an unbearable family that has moved 
            into their home, and hire a malicious spirit to drive them out.",
            "tags" => ['Ghosts','Haunting']
        ],
        4 => [
            "description" => "Cady Heron is a hit with The Plastics, 
            the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, 
            the ex-boyfriend of alpha Plastic Regina George.",
            "tags" => ['High school ', 'Popularity']
        ],
        5 => [
            "description" => "Jenna is a pregnant, unhappily married waitress in the deep south. 
            She meets a newcomer to her town and falls into an unlikely relationship 
            as a last attempt at happiness.",
            "tags" => ['Pregnancy', 'Waitress', 'Abusive husband']
        ],
        6 => [
            "description" => "A drag queen comes to the rescue of a man who, after inheriting his father's shoe factory, 
            needs to diversify his product if he wants to keep the business afloat.",
            "tags" => ['Shoes', 'Drag']
        ],
        7 => [
            "description" => "In 19th-century France, Jean Valjean, 
            who for decades has been hunted by the ruthless policeman Javert after breaking parole, 
            agrees to care for a factory worker's daughter. The decision changes their lives forever.",
            "tags" => ['France', 'Poor', 'Revolution']
        ],
        8 => [
            "description" => "When young newspaper sellers are exploited beyond reason 
            by their bosses they set out to enact change and are met by the ruthlessness of big business.",
            "tags" => ['Orphan', 'Paperboy']
        ],
        9 => [
            "description" => "Bohemians in the East Village of New York City struggling with life, 
            love and AIDS, and the impacts they have on America.",
            "tags" => ['Drugs', 'Aids', 'New York City']
        ],
        10 => [
            "description" => "The story of how a green-skinned woman framed by the Wizard of Oz 
            becomes the Wicked Witch of the West",
            "tags" => ['Witches', 'Oz']
        ],
    ];

    return $tags[$id];
}


