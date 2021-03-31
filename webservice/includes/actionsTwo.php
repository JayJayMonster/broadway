<?php

/**
 * @return array
 */
function getShows()
{
    return [
        [
            "id" => 1,
            "name" => "Moos",
            "img" => "https://source.unsplash.com/300x300/?doggy",
            "description" => "I like to play fetch and run in the park",
            "tags" => ['Cute' , ' Biter' , ' Woof'],

        ],
        [
            "id" => 2,
            "name" => "Rover",
            "img" => "https://source.unsplash.com/300x300/?puppy",
            "description" => "The revolution has begun! Liberated forever! Domesticated never!",
            "tags" => ['Hero', ' Innocent', ' Superdog'],
        ],
        [
            "id" => 3,
            "name" => "Boef",
            "img" => "https://source.unsplash.com/300x300/?retriever",
            "description" => "I got big plans. I'm gonna sit here and I'm gonna wait for my owner to come back",
            "tags" => ['Brave',' Adorable'],
        ],
        [
            "id" => 4,
            "name" => "Zorro",
            "img" => "https://source.unsplash.com/300x300/?pup",
            "description" => "I will never eat a pill like that again. Unless it's covered in peanut butter. Because, I mean, come on! Right? It's peanut butter!",
            "tags" => ['Big eater', ' Silly'],
        ],
        [
            "id" => 5,
            "name" => "Robin",
            "img" => "https://source.unsplash.com/300x300/?pupper",
            "description" => "If I had a dime for every owner I killed I would have a dime",
            "tags" => ['Loyal', ' Temper'],
        ],
        [
            "id" => 6,
            "name" => "Jax",
            "img" => "https://source.unsplash.com/300x300/?bulldog",
            "description" => "The squirrels are gonna take over the world, I knew it! I always said, squirrels are little shifty little guys.",
            "tags" => ['Playfull', ' Cute'],
        ],
        [
            "id" => 7,
            "name" => "Yara",
            "img" => "https://source.unsplash.com/300x300/?dachshund",
            "description" => "My owner got a new puppy.",
            "tags" => ['Slow', ' Sad'],
        ],
        [
            "id" => 8,
            "name" => "Robbie",
            "img" => "https://source.unsplash.com/300x300/?poodle",
            "description" => "Guy's got 2 things in this life: his water bowl and his dignity. You take one, you take the other",
            "tags" => ['Brave', ' Loyal'],
        ],
        [
            "id" => 9,
            "name" => "Mexx",
            "img" => "https://source.unsplash.com/300x300/?greyhound",
            "description" => "And now you re touching me. I like you you are going to be my pet",
            "tags" => ['Cute', ' Playfull'],
        ],
        [
            "id" => 10,
            "name" => "Nixon",
            "img" => "https://source.unsplash.com/300x300/?beagle",
            "description" => "Can we go the park please???",
            "tags" => ['Young', ' Happy'],
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


